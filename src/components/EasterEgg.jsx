import { useState, useEffect, useCallback, useRef } from 'react'
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
  const [difficulty, setDifficulty] = useState('medium')
  const [showDifficulty, setShowDifficulty] = useState(false)

  const directionRef = useRef(initialDirection)
  const touchStart = useRef({ x: 0, y: 0 })

  const speeds = { easy: 300, medium: 150, hard: 90 }

  const difficultyColors = {
    easy: 'text-green-400',
    medium: 'text-yellow-400',
    hard: 'text-red-400'
  }

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
    directionRef.current = initialDirection
    setGameOver(false)
    setScore(0)
    setIsPlaying(true)
    setShowDifficulty(false)
  }

  const handleDirection = (newDir) => {
    const current = directionRef.current
    if (newDir.x === -current.x && newDir.y === -current.y) return
    if (newDir.x === 0 && newDir.y === 0) return
    setDirection(newDir)
    directionRef.current = newDir
  }

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
        e.preventDefault()
      }
      switch(e.key) {
        case 'ArrowUp': handleDirection({ x: 0, y: -1 }); break
        case 'ArrowDown': handleDirection({ x: 0, y: 1 }); break
        case 'ArrowLeft': handleDirection({ x: -1, y: 0 }); break
        case 'ArrowRight': handleDirection({ x: 1, y: 0 }); break
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Game loop
  useEffect(() => {
    if (!isPlaying || gameOver) return

    const moveSnake = () => {
      setSnake(prevSnake => {
        const newHead = {
          x: prevSnake[0].x + directionRef.current.x,
          y: prevSnake[0].y + directionRef.current.y
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

    const interval = setInterval(moveSnake, speeds[difficulty])
    return () => clearInterval(interval)
  }, [difficulty, food, gameOver, isPlaying, generateFood, score, highScore])

  // Mobile swipe
  const handleTouchStart = (e) => {
    touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
  }

  const handleTouchEnd = (e) => {
    const dx = e.changedTouches[0].clientX - touchStart.current.x
    const dy = e.changedTouches[0].clientY - touchStart.current.y
    const absDx = Math.abs(dx)
    const absDy = Math.abs(dy)

    if (Math.max(absDx, absDy) < 25) return

    if (absDx > absDy) {
      handleDirection({ x: dx > 0 ? 1 : -1, y: 0 })
    } else {
      handleDirection({ x: 0, y: dy > 0 ? 1 : -1 })
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-[fadeIn_0.2s_ease]">
      <div className="bg-bg-card border border-border rounded-2xl p-6 w-full max-w-sm animate-[scaleIn_0.2s_ease]">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Gamepad2 className="w-5 h-5 text-accent-blue" />
            <h3 className="text-lg font-semibold text-text-primary">Snake</h3>
          </div>
          <button onClick={onClose} className="text-text-secondary hover:text-text-primary transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Score + Difficulty + Best */}
        <div className="flex items-center justify-between mb-3 text-sm gap-1">
          <span className="text-text-secondary">Score: <span className="text-accent-blue font-bold">{score}</span></span>
          
          {/* Difficulty selector */}
          <button
            onClick={() => !isPlaying && setShowDifficulty(!showDifficulty)}
            disabled={isPlaying}
            className={`text-xs font-medium transition-colors disabled:opacity-60 disabled:cursor-not-allowed
              ${difficultyColors[difficulty]}`}
          >
            {difficulty === 'easy' ? '🐢 Easy' : difficulty === 'medium' ? '🐇 Medium' : '🚀 Hard'}
            {!isPlaying && ' ▾'}
          </button>
          
          <span className="text-text-secondary">Best: <span className="text-accent-blue font-bold">{highScore}</span></span>
        </div>

        {/* Difficulty Dropdown */}
        {showDifficulty && !isPlaying && (
          <div className="flex gap-1.5 mb-3 animate-[fadeIn_0.2s_ease]">
            {[
              { key: 'easy', label: '🐢 Easy', color: 'green' },
              { key: 'medium', label: '🐇 Medium', color: 'yellow' },
              { key: 'hard', label: '🚀 Hard', color: 'red' }
            ].map(({ key, label, color }) => (
              <button
                key={key}
                onClick={() => { setDifficulty(key); setShowDifficulty(false) }}
                className={`flex-1 py-1.5 rounded-lg text-xs font-medium border transition-all
                  ${difficulty === key 
                    ? `bg-${color}-500/10 border-${color}-500 text-${color}-400` 
                    : 'bg-bg-secondary border-border text-text-secondary hover:border-accent-blue'}`}
              >
                {label}
              </button>
            ))}
          </div>
        )}

        {/* Game Board */}
        <div 
          className="grid mx-auto mb-3 rounded-lg overflow-hidden border border-border touch-none select-none bg-#111111"
          style={{ 
            gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
            width: '100%',
            aspectRatio: '1'
          }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
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
                  ${isFood ? 'bg-red-500 rounded-full' : ''}
                  ${!isSnake && !isFood ? 'bg-#111111' : ''}
                `}
              />
            )
          })}
        </div>

        {/* Mobile D-Pad */}
        {isPlaying && !gameOver && (
          <div className="mb-3 md:hidden">
            <div className="grid grid-cols-3 gap-1.5 max-w-140px mx-auto">
              <div />
              <button
                onTouchStart={(e) => { e.preventDefault(); handleDirection({ x: 0, y: -1 }) }}
                onClick={() => handleDirection({ x: 0, y: -1 })}
                className="w-10 h-10 bg-bg-secondary border border-border rounded-lg 
                  flex items-center justify-center text-text-secondary text-lg
                  active:bg-accent-blue/20 active:border-accent-blue transition-colors"
              >
                ▲
              </button>
              <div />
              <button
                onTouchStart={(e) => { e.preventDefault(); handleDirection({ x: -1, y: 0 }) }}
                onClick={() => handleDirection({ x: -1, y: 0 })}
                className="w-10 h-10 bg-bg-secondary border border-border rounded-lg 
                  flex items-center justify-center text-text-secondary text-lg
                  active:bg-accent-blue/20 active:border-accent-blue transition-colors"
              >
                ◀
              </button>
              <div className="w-10 h-10" />
              <button
                onTouchStart={(e) => { e.preventDefault(); handleDirection({ x: 1, y: 0 }) }}
                onClick={() => handleDirection({ x: 1, y: 0 })}
                className="w-10 h-10 bg-bg-secondary border border-border rounded-lg 
                  flex items-center justify-center text-text-secondary text-lg
                  active:bg-accent-blue/20 active:border-accent-blue transition-colors"
              >
                ▶
              </button>
              <div />
              <button
                onTouchStart={(e) => { e.preventDefault(); handleDirection({ x: 0, y: 1 }) }}
                onClick={() => handleDirection({ x: 0, y: 1 })}
                className="w-10 h-10 bg-bg-secondary border border-border rounded-lg 
                  flex items-center justify-center text-text-secondary text-lg
                  active:bg-accent-blue/20 active:border-accent-blue transition-colors"
              >
                ▼
              </button>
              <div />
            </div>
          </div>
        )}

        {/* Start Button */}
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

        {/* Game Over */}
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

        <p className="text-xs text-text-secondary mt-2 text-center">
          {isPlaying ? 'Swipe board or use D-pad' : 'Arrow keys, swipe, or D-pad to play'}
        </p>
      </div>
    </div>
  )
}

function EasterEgg() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
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

      {isOpen && <SnakeGame onClose={() => setIsOpen(false)} />}

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