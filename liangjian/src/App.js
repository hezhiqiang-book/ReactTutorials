import React from 'react'

/**
 * 定义 App 组件
 */
class App extends React.Component {
  /**
   * 渲染组件
   */
  render() {
    let boss = '李云龙'
    // JSX 语法
    return (
      <div>
        <h1>独立团，团长{boss}</h1>
        <Yiying boss='张大彪'></Yiying>
        <Qibinglian boss="孙德胜"></Qibinglian>
      </div>
      //  Adjacent JSX elements must be wrapped in an enclosing tag
      //<h3></h3>
    )
  }
}

function Qibinglian(props) {
  return <h3>骑兵连连长{props.boss}, 冲啊!</h3>
}

class Yiying extends React.Component {
  // 初始化组件
  constructor(props) {
    super(props)
    this.state = {
      solders: ['虎子', '柱子', '王根生']
    }
  }
  render() {
    return (
      <div>
        <h1> 一营营长，{this.props.boss}</h1>
        <ul>
          {this.state.solders.map(v => {
            return <li key={v}>{v}</li>
          })}
        </ul>
      </div>
    )
  }
}

// 导出 App 组件
export default App