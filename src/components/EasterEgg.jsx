import { useState, useEffect, useCallback } from 'react'
import { Gamepad2, X } from 'lucide-react'

function SnakeGame({ onClose }) {
  const gridSize = 20
  const initialSnake = [{ x: 10, y: 10 }]
  const initialFood = { x: 15, y: 10 }
  const initialDirection = { x: 1, y: 0 }

  const [snake, setSnake] = useState(initialSnake)
  const [food, setFood] = useState(initialFood)
  const [direction, setDirection] = useState(initialDirection)
  const [gameOver, setGameOver] = useState(false)
  const [score, setScore] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [highScore, setHighScore] = useState(0)

  const generateFood = useCallback(() => {
    setFood({
      x: Math.floor(Math.random() * gridSize),
      y: Math.floor(Math.random() * gridSize)
    })
  }, [])

  const resetGame = () => {
    setSnake(initialSnake)
    setFood(initialFood)
    setDirection(initialDirection)
    setGameOver(false)
    setScore(0)
    setIsPlaying(true)
  }

  useEffect(() => {
    if (!isPlaying || gameOver) return

    const moveSnake = () => {
      setSnake(prevSnake => {
        const newHead = {
          x: prevSnake[0].x + direction.x,
          y: prevSnake[0].y + direction.y
        }

        if (newHead.x < 0 || newHead.x >= gridSize || newHead.y < 0 || newHead.y >= gridSize) {
          setGameOver(true)
          setIsPlaying(false)
          if (score > highScore) setHighScore(score)
          return prevSnake
        }

        if (prevSnake.some(s => s.x === newHead.x && s.y === newHead.y)) {
          setGameOver(true)
          setIsPlaying(false)
          if (score > highScore) setHighScore(score)
          return prevSnake
        }

        const newSnake = [newHead, ...prevSnake]

        if (newHead.x === food.x && newHead.y === food.y) {
          setScore(s => s + 10)
          generateFood()
        } else {
          newSnake.pop()
        }

        return newSnake
      })
    }

    const interval = setInterval(moveSnake, 100)
    return () => clearInterval(interval)
  }, [direction, food, gameOver, isPlaying, generateFood, score, highScore])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
        e.preventDefault()
      }
      switch(e.key) {
        case 'ArrowUp':
          setDirection(prev => prev.y === 1 ? prev : { x: 0, y: -1 })
          break
        case 'ArrowDown':
          setDirection(prev => prev.y === -1 ? prev : { x: 0, y: 1 })
          break
        case 'ArrowLeft':
          setDirection(prev => prev.x === 1 ? prev : { x: -1, y: 0 })
          break
        case 'ArrowRight':
          setDirection(prev => prev.x === -1 ? prev : { x: 1, y: 0 })
          break
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-[fadeIn_0.2s_ease]">
      <div className="bg-bg-card border border-border rounded-2xl p-6 w-full max-w-sm animate-[scaleIn_0.2s_ease]">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Gamepad2 className="w-5 h-5 text-accent-blue" />
            <h3 className="text-lg font-semibold text-text-primary">Snake</h3>
          </div>
          <button 
            onClick={onClose}
            className="text-text-secondary hover:text-text-primary transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Score */}
        <div className="flex justify-between items-center mb-3 text-sm">
          <span className="text-text-secondary">Score: <span className="text-accent-blue font-bold">{score}</span></span>
          <span className="text-text-secondary">Best: <span className="text-accent-blue font-bold">{highScore}</span></span>
        </div>

        {/* Game Board */}
        <div 
          className="grid mx-auto mb-3 rounded-lg overflow-hidden border border-border"
          style={{ 
            gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
            width: '100%',
            aspectRatio: '1'
          }}
        >
          {Array.from({ length: gridSize * gridSize }).map((_, i) => {
            const x = i % gridSize
            const y = Math.floor(i / gridSize)
            const isSnake = snake.some(s => s.x === x && s.y === y)
            const isHead = snake[0]?.x === x && snake[0]?.y === y
            const isFood = food.x === x && food.y === y

            return (
              <div
                key={i}
                className={`w-full h-full
                  ${isHead ? 'bg-accent-blue rounded-sm' : ''}
                  ${isSnake && !isHead ? 'bg-accent-blue/60' : ''}
                  ${isFood ? 'bg-red-500 rounded-full scale-75' : ''}
                  ${!isSnake && !isFood ? 'bg-bg-secondary' : ''}
                `}
              />
            )
          })}
        </div>

        {/* Controls */}
        {!isPlaying && !gameOver && (
          <button
            onClick={resetGame}
            className="w-full py-2.5 bg-linear-to-r from-accent-blue to-accent-blue-dark 
              text-white rounded-xl text-sm font-medium hover:shadow-lg 
              hover:shadow-accent-blue/25 transition-all duration-300"
          >
            Start Game
          </button>
        )}

        {gameOver && (
          <div className="text-center">
            <p className="text-red-400 text-sm mb-2">Game Over! Score: {score}</p>
            <button
              onClick={resetGame}
              className="w-full py-2.5 bg-linear-to-r from-accent-blue to-accent-blue-dark 
                text-white rounded-xl text-sm font-medium hover:shadow-lg 
                hover:shadow-accent-blue/25 transition-all duration-300"
            >
              Play Again
            </button>
          </div>
        )}

        <p className="text-xs text-text-secondary mt-2 text-center">Arrow keys to move</p>
      </div>
    </div>
  )
}

function EasterEgg() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 w-12 h-12 bg-linear-to-r from-accent-blue to-accent-blue-dark 
          rounded-full flex items-center justify-center shadow-lg shadow-accent-blue/25
          hover:scale-110 hover:shadow-xl hover:shadow-accent-blue/40
          transition-all duration-300 animate-bounce"
        title="Found a secret! 🎮"
      >
        <Gamepad2 className="w-5 h-5 text-white" />
      </button>

      {/* Game Modal */}
      {isOpen && <SnakeGame onClose={() => setIsOpen(false)} />}

      {/* Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </>
  )
}

export default EasterEgg