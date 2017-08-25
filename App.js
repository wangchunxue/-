import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.direction = "";
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

    this.die = () => {
      alert("蛇死掉了,你需要重新开始");
      this.snake = [{ x: 0, y: 4 }, { x: 0, y: 3 }, { x: 0, y: 2 }];
      this.direction = "stop";
      this.move(this.direction);
      this.setState({ ground });
    }
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
    this.eat = (d, e) => {
        if (this.snake[0].x === this.food.x && this.snake[0].y === this.food.y) {
          let snakeLength = this.snake.length;
          let snail = [{ x: d, y: e }];
          this.snake = this.snake.concat(snail);
          this.food = ({ x: Math.floor(Math.random() * 25), y: Math.floor(Math.random() * 50) });
          for (let i = 0; i < snakeLength; i++) {
            if (this.snake[i].x === this.food.x && this.snake[i].x === this.food.x) {
              return this.food = ({ x: Math.floor(Math.random() * 25), y: Math.floor(Math.random() * 50) });
            }
          }
        }
    }
    this.move = (direction) => {
      console.log(this.food.x, this.food.y)
      let ground = this.getGround();
      ground[this.food.x][this.food.y] = true;
      let snakeLength = this.snake.length;
      if (direction === 'down') {
        if (this.snake[0].x !== 24) {
         // this.newsnake(this.snake[0].x + 1, this.snake[0].y, this.snake[1].x, this.snake[snakeLength - 1].x + 1, this.snake[snakeLength - 1].y);
                   let head = [{ x: this.snake[0].x + 1, y: this.snake[0].y }];
                    this.newsnake = head.concat(this.snake);
                    if (this.snake[1].x !== this.newsnake[0].x) {
                      this.newsnake = this.newsnake.slice(0, -1);
                      this.snake = this.newsnake;
                      this.snake.forEach(v => {
                        ground[v.x][v.y] = true;
                      })
                      
                      this.eat(this.snake[snakeLength - 1].x + 1, this.snake[snakeLength - 1].y);
                      this.setState({ ground });
                      for (let i = 2; i < snakeLength; i++) {
                        if (this.snake[0].x === this.snake[i].x && this.snake[0].y === this.snake[i].y) {
                          this.die();
                        }
                      }
                    }
        } else {
          this.die();
        }
      } else if (direction === 'up') {
        if (this.snake[0].x > 0) {
          //this.newsnake(this.snake[0].x - 1, this.snake[0].y, this.snake[1].x, this.snake[snakeLength - 1].x - 1, this.snake[snakeLength - 1].y);
           let head = [{ x: this.snake[0].x - 1, y: this.snake[0].y }];
           this.newsnake = head.concat(this.snake);
           if (this.snake[1].x !== this.newsnake[0].x) {
             this.newsnake = this.newsnake.slice(0, -1);
             this.snake = this.newsnake;
             this.snake.forEach(v => {
               ground[v.x][v.y] = true;
             })
             this.eat(this.snake[snakeLength - 1].x - 1, this.snake[snakeLength - 1].y);
             this.setState({ ground });
              for (let i = 2; i < snakeLength; i++) {
               if (this.snake[0].x === this.snake[i].x && this.snake[0].y === this.snake[i].y) {
                 this.die();
               }
             }
           }
        } else {
          this.die();
        }
      } else if (direction === 'left') {
        if (this.snake[0].y > 0) {
          //this.newsnake(this.snake[0].x, this.snake[0].y - 1, this.snake[1].y, this.snake[snakeLength - 1].x, this.snake[snakeLength - 1].y - 1);
           let head = [{ x: this.snake[0].x, y: this.snake[0].y - 1 }];
           this.newsnake = head.concat(this.snake);
           if (this.snake[1].y !== this.newsnake[0].y) {
             this.newsnake = this.newsnake.slice(0, -1);
             this.snake = this.newsnake;
             this.snake.forEach(v => {
               ground[v.x][v.y] = true;
             })
            
             ground[this.food.x][this.food.y] = true;
             this.eat(this.snake[snakeLength - 1].x, this.snake[snakeLength - 1].y - 1);
             this.setState({ ground });
             for (let i = 2; i < snakeLength; i++) {
               if (this.snake[0].x === this.snake[i].x && this.snake[0].y === this.snake[i].y) {
                 this.die();
               }
             }
           }
        } else {
          this.die();
        }
      } else if (direction === 'right') {
        if (this.snake[0].y !== 49) {
        //this.newsnake(this.snake[0].x, this.snake[0].y + 1, this.snake[1].y, this.snake[snakeLength - 1].x, this.snake[snakeLength - 1].y + 1);
           let head = [{ x: this.snake[0].x, y: this.snake[0].y + 1 }];
           this.newsnake = head.concat(this.snake);
           if (this.snake[1].y !== this.newsnake[0].y) {
             this.newsnake = this.newsnake.slice(0, -1);
             this.snake = this.newsnake;
             this.snake.forEach(v => {
               ground[v.x][v.y] = true;
             })
             this.eat(this.snake[snakeLength - 1].x, this.snake[snakeLength - 1].y + 1);
              this.setState({ ground });
              for (let i = 2; i < snakeLength; i++) {
               if (this.snake[0].x === this.snake[i].x && this.snake[0].y === this.snake[i].y) {
                 this.die();
                 console.log(i);
               }
             }
            
           }
        } else {
          this.die();
        }
      } else if (direction === 'stop') {
        return this.snake;
      }
    }
    const ground = this.getGround();
    this.state = {
      ground,
    };

    this.snake.forEach(v => {
      ground[v.x][v.y] = true;
    })
    ground[this.food.x][this.food.y] = true;
    this.startClick = this.startClick.bind(this);
    this.pauseClick = this.pauseClick.bind(this);
    this.restartClick = this.restartClick.bind(this);
  }
  startClick() {
    document.addEventListener('keypress', (e) => {
      let keyCode = e.which || e.keyCode;
      switch (keyCode) {
        case 119:
          this.direction = 'up';
          break;
        case 115:
          this.direction = 'down';
          break;
        case 97:
          this.direction = 'left';
          break;
        case 100:
          this.direction = 'right';
          break;
        case 112:
          this.direction = "stop";
          break;
      }
      this.move(this.direction);
    }, false);

    this.direction = "right";
    setInterval(() => {
      this.move(this.direction);
    }, 500);
  }
  pauseClick() {
    this.direction = "stop";
    this.move(this.direction);
  }
  restartClick() {
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
    let ground = this.getGround();
    this.snake.forEach(v => {
      ground[v.x][v.y] = true;
    })
    ground[this.food.x][this.food.y] = true;
    this.setState({ ground });
    this.direction = "stop";
    this.move(this.direction);
  }
  render() {
    return (
      <div>
        <div className="playground">
          {
            this.state.ground.map(v =>
              v.map(i => <div className={i ? "light-dot" : "dot"}></div>)
            )
          }
        </div>
        <div className="status">
          <div className="move start" onClick={this.startClick}>start</div>
          <div className="move pause" onClick={this.pauseClick}>pause</div>
          <div className="move restart" onClick={this.restartClick}>restart</div>
        </div>
      </div>
    );
  }
}

export default App;
