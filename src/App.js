import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.getGround = () => {
      const arr = [];
      for (let i = 0; i < 25; i++) {
        arr[i] = [];
        for (let j = 0; j < 50; j++) {
          arr[i][j] = false;
        }
      };
      return arr;
    };
    this.snake = [{
      x: 0,
      y: 4
    }, {
      x: 0,
      y: 3
    }, {
      x: 0,
      y: 2
    }];

    this.food = ({
      x: 10,
      y: 12
    });
    const ground = this.getGround();
    this.state = {
      ground,
    };

    this.snake.forEach(v => {
      ground[v.x][v.y] = true;
    })
    ground[this.food.x][this.food.y] = true;
  }
  componentDidMount() {

    const move = (direction) => {
      let ground = this.getGround();
      ground[this.food.x][this.food.y] = true;

      if (direction === 'down') {
        if (this.snake[0].x !== 24) {
          let head = [{ x: this.snake[0].x + 1, y: this.snake[0].y }];
          this.newsnake = head.concat(this.snake);
          if (this.snake[1].x !== this.newsnake[0].x) {
            this.newsnake = this.newsnake.slice(0, -1);
            this.snake = this.newsnake;
            this.snake.forEach(v => {
              ground[v.x][v.y] = true;
            })
            if (this.snake[0].x === this.food.x && this.snake[0].y === this.food.y) {
              let snakeLength = this.snake.length;
              let snail = [{ x: this.snake[snakeLength - 1].x + 1, y: this.snake[snakeLength - 1].y }];
              this.snake = this.snake.concat(snail);
              this.food.x = Math.floor(Math.random() * 25 + 1);
              this.food.y = Math.floor(Math.random() * 50 + 1);
            }
            this.setState({ ground });
          }
        } else {
          alert("蛇死掉了,你需要重新开始");
          this.snake = [{ x: 0, y: 4 }, { x: 0, y: 3 }, { x: 0, y: 2 }];
          this.setState({ ground });
        }
      } else if (direction === 'up') {
        if (this.snake[0].x > 0) {
          let head = [{ x: this.snake[0].x - 1, y: this.snake[0].y }];
          this.newsnake = head.concat(this.snake);
          if (this.snake[1].x !== this.newsnake[0].x) {
            this.newsnake = this.newsnake.slice(0, -1);
            this.snake = this.newsnake;
            this.snake.forEach(v => {
              ground[v.x][v.y] = true;
            })
            if (this.snake[0].x === this.food.x && this.snake[0].y === this.food.y) {
              let snakeLength = this.snake.length;
              let snail = [{ x: this.snake[snakeLength - 1].x - 1, y: this.snake[snakeLength - 1].y }];
              this.snake = this.snake.concat(snail);
              this.food.x = Math.floor(Math.random() * 25 + 1);
              this.food.y = Math.floor(Math.random() * 50 + 1);
            }
            this.setState({ ground });
          }
        } else {
          alert("蛇死掉了,你需要重新开始");
          this.snake = [{ x: 6, y: 4 }, { x: 6, y: 5 }, { x: 6, y: 6 }];
          this.setState({ ground });
        }
      } else if (direction === 'left') {
        if (this.snake[0].y > 0) {
          let head = [{ x: this.snake[0].x, y: this.snake[0].y - 1 }];
          this.newsnake = head.concat(this.snake);
          if (this.snake[1].y !== this.newsnake[0].y) {
            this.newsnake = this.newsnake.slice(0, -1);
            this.snake = this.newsnake;
            this.snake.forEach(v => {
              ground[v.x][v.y] = true;
            })
            ground[this.food.x][this.food.y] = true;
            if (this.snake[0].x === this.food.x && this.snake[0].y === this.food.y) {
              let snakeLength = this.snake.length;
              let snail = [{ x: this.snake[snakeLength - 1].x, y: this.snake[snakeLength - 1].y + 1 }];
              this.snake = this.snake.concat(snail);
              this.food.x = Math.floor(Math.random() * 25 + 1);
              this.food.y = Math.floor(Math.random() * 50 + 1);
            }
            this.setState({ ground });
          }
        } else {
          alert("蛇死掉了,你需要重新开始");
          this.snake = [{ x: 0, y: 8 }, { x: 0, y: 9 }, { x: 0, y: 10 }];
          this.setState({ ground });
        }
      } else if (direction === 'right') {
        if (this.snake[0].y !== 49) {
          let head = [{ x: this.snake[0].x, y: this.snake[0].y + 1 }];
          this.newsnake = head.concat(this.snake);
          if (this.snake[1].y !== this.newsnake[0].y) {
            this.newsnake = this.newsnake.slice(0, -1);
            this.snake = this.newsnake;
            this.snake.forEach(v => {
              ground[v.x][v.y] = true;
            })

            if (this.snake[0].x === this.food.x && this.snake[0].y === this.food.y) {
              let snakeLength = this.snake.length;
              let snail = [{ x: this.snake[snakeLength - 1].x, y: this.snake[snakeLength - 1].y - 1 }];
              this.snake = this.snake.concat(snail);
              this.food.x = Math.floor(Math.random() * 25 + 1);
              this.food.y = Math.floor(Math.random() * 50 + 1);
            }
            this.setState({ ground });

          }
        } else {
          alert("蛇死掉了,你需要重新开始");
          this.snake = [{ x: 0, y: 4 }, { x: 0, y: 3 }, { x: 0, y: 2 }];
          this.setState({ ground });
        }
      } else if (direction === 'right') {
        return this.snake;
      }
    }

    let direction = "";
    document.addEventListener('keypress', (e) => {
      let keyCode = e.which || e.keyCode;
      switch (keyCode) {
        case 119:
          direction = 'up';
          break;
        case 115:
          direction = 'down';
          break;
        case 97:

          direction = 'left';

          break;
        case 100:
          direction = 'right';
          break;
        case 112:
          direction = "stop";
          break;
      }
      move(direction);

    }, false);

    setInterval(() => {
      move(direction)
    }, 500);

  }

  render() {
    return (
      <div className="playground">
        {
          this.state.ground.map(v =>
            v.map(i => <div className={i ? "light-dot" : "dot"}></div>)
          )
        }
      </div>
    );
  }
}

export default App;
