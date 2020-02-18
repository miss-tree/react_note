import React from 'react'

const Context =()=> {
        return (
            <div>
                <div>
                    <h3 className='Title_h3'>Context</h3>
                    <p>
                        我们经常会遇到组件传值的问题，但是一个个组件的传会比较麻烦，react就给我们提供了一个新的API--Context。
                    为了共享那些对于一个组件树而言是“全局”的数据，例如当前认证的用户、主题或首选语言。有点类似Vue的provide和inject方法。
                    但是这样会使组件复用性比较差。
                    </p>
                    <pre>
                        <code>
                            {`
        // Context 可以让我们无须明确地传遍每一个组件，就能将值深入传递进组件树。
        // 为当前的 theme 创建一个 context（“light”为默认值）。
        const ThemeContext = React.createContext('light');
        
        class App extends React.Component {
          render() {
            // 使用一个 Provider 来将当前的 theme 传递给以下的组件树。
            // 无论多深，任何组件都能读取这个值。将 “dark” 作为当前的值传递下去。
            return (
              <ThemeContext.Provider value="dark">
                <Toolbar />
              </ThemeContext.Provider>
            );
          }
        }
        
        // 中间的组件再也不必指明往下传递 theme 了。
        function Toolbar(props) {
          return (
            <div>
              <ThemedButton />
            </div>
          );
        }
        
        class ThemedButton extends React.Component {
          // 指定 contextType 读取当前的 theme context。
          // React 会往上找到最近的 theme Provider，然后使用它的值。
          // 在这个例子中，当前的 theme 值为 “dark”。
          static contextType = ThemeContext;
          render() {
            return <Button theme={this.context} />;
          }
        }                    
                            `}
                        </code>
                    </pre>
                </div>
                <div>
                    <h4>组件间的另一种传值</h4>
                    <p>
                        像图片示例一样需要一个个组件传递值，显得很麻烦，若中间多个组件，有一个值忘记传值容易报错。
                    直接告诉下面的组件将要给哪个组件传值就好。但是这样的组件复用也不强，用的地方多还是用redux好。
                    </p>
                    <div className='linuxImg'>
                        <img src={require('../../../assets/images/react/context01.jpg')} alt=''/>
                        <img src={require('../../../assets/images/react/context02.jpg')} alt=""/>
                    </div>
                    <pre>
                        <code>
                            {`
                            
        function Page(props) {
            const user = props.user;
            const userLink = (
                <Link href={user.permalink}>
                <Avatar user={user} size={props.avatarSize} />
                </Link>
            );
            return <PageLayout userLink={userLink} />;
        }
            
        // 现在，我们有这样的组件：
        <Page user={user} avatarSize={avatarSize} />
        // ... 渲染出 ...
        <PageLayout userLink={...} />
        // ... 渲染出 ...
        <NavigationBar userLink={...} />
        // ... 渲染出 ...
        {props.userLink}                    
                            `}
                        </code>
                    </pre>
                    <div>传值多个组件</div>
                    <pre>
                        <code>
                            {`
                            
        function Page(props) {
            const user = props.user;
            const content = <Feed user={user} />;
            const topBar = (
                <NavigationBar>
                <Link href={user.permalink}>
                    <Avatar user={user} size={props.avatarSize} />
                </Link>
                </NavigationBar>
            );
            return (
                <PageLayout
                topBar={topBar}
                content={content}
                />
            );
            }                   
                            `}
                        </code>
                    </pre>
                </div>
            </div>
        )
}
export default Context
