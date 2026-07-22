import { useState, useEffect, useCallback } from 'react'
import { Gamepad2 } from 'lucide-react'

function SnakeGame() {
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
    const newFood = {
      x: Math.floor(Math.random() * gridSize),
      y: Math.floor(Math.random() * gridSize)
    }
    setFood(newFood)
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

        // Wall collision
        if (newHead.x < 0 || newHead.x >= gridSize || newHead.y < 0 || newHead.y >= gridSize) {
          setGameOver(true)
          setIsPlaying(false)
          if (score > highScore) setHighScore(score)
          return prevSnake
        }

        // Self collision
        if (prevSnake.some(segment => segment.x === newHead.x && segment.y === newHead.y)) {
          setGameOver(true)
          setIsPlaying(false)
          if (score > highScore) setHighScore(score)
          return prevSnake
        }

        const newSnake = [newHead, ...prevSnake]

        // Food eaten
        if (newHead.x === food.x && newHead.y === food.y) {
          setScore(s => s + 10)
          generateFood()
        } else {
          newSnake.pop()
        }

        return newSnake
      })
    }

    const interval = setInterval(moveSnake, 20)
    return () => clearInterval(interval)
  }, [direction, food, gameOver, isPlaying, generateFood, score, highScore])

  useEffect(() => {
    const handleKeyDown = (e) => {
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
    <div className="bg-bg-card/30 backdrop-blur-md border border-border rounded-2xl p-6 text-center">
      <div className="flex items-center justify-center gap-2 mb-3">
        <Gamepad2 className="w-5 h-5 text-accent-blue" />
        <h3 className="text-lg font-semibold text-text-primary">Snake Game</h3>
      </div>

      <div className="flex justify-between items-center mb-3 text-sm">
        <span className="text-text-secondary">Score: <span className="text-accent-blue font-bold">{score}</span></span>
        <span className="text-text-secondary">Best: <span className="text-accent-blue font-bold">{highScore}</span></span>
      </div>

      <div 
        className="grid mx-auto mb-3 rounded-lg overflow-hidden border border-border"
        style={{ 
          gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
          width: '280px',
          height: '280px'
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

      {!isPlaying && !gameOver && (
        <button
          onClick={resetGame}
          className="px-6 py-2 bg-linear-to-r from-accent-blue to-accent-blue-dark 
            text-white rounded-full text-sm font-medium hover:shadow-lg 
            hover:shadow-accent-blue/25 transition-all duration-300"
        >
          Start Game
        </button>
      )}

      {gameOver && (
        <div>
          <p className="text-red-400 text-sm mb-2">Game Over! Score: {score}</p>
          <button
            onClick={resetGame}
            className="px-6 py-2 bg-linear-to-r from-accent-blue to-accent-blue-dark 
              text-white rounded-full text-sm font-medium hover:shadow-lg 
              hover:shadow-accent-blue/25 transition-all duration-300"
          >
            Play Again
          </button>
        </div>
      )}

      <p className="text-xs text-text-secondary mt-2">Use arrow keys to play</p>
    </div>
  )
}

export default SnakeGame