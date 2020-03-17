import React from "react"

class EventLoop extends React.Component{
    
	render(){
        return(
        <div>
            <div>
                <h3 className='Title_h3'>事件驱动</h3>
                <p>
                在处理异步事件的时候有两种方式，一种是异步回调方式，另一种是nodejs的事件驱动。
                </p>
				<ul>
					<li>
						执行 定时器回调 的阶段。
						检查定时器，如果到了时间，就执行回调。
						这些定时器就是setTimeout、setInterval。
						这个阶段暂且叫它timer。
					</li>
					<li>
						轮询(英文叫poll)阶段。因为在node代码中难免会有异步操作，
						比如文件I/O，网络I/O等等，那么当这些异步操作做完了，
						就会来通知JS主线程，怎么通知呢？
						就是通过'data'、 'connect'等事件使得事件循环到达 poll 阶段。
						<div>如果队列不为空，拿出队列中的方法依次执行</div>
						<div>如果队列为空，检查是否有 setImmdiate 的回调
							<div>有则前往check阶段</div>
							<div>
								没有则继续等待，相当于阻塞了一段时间(阻塞时间是有上限的), 
								等待 callback 函数加入队列，加入后会立刻执行。
								一段时间后自动进入 check 阶段。
							</div>
						</div>
					</li>
					<li>check 阶段。这是一个比较简单的阶段，直接执行 setImmdiate 的回调。</li>
				</ul>
				<div>nodejs 的 eventLoop 分为下面的几个阶段</div>
				<ul>
					<li>timer 阶段</li>
					<li>I/O 异常回调阶段</li>
					<li>空闲、预备状态(第2阶段结束，poll 未触发之前)</li>
					<li>poll 阶段</li>
					<li>check 阶段</li>
					<li>关闭事件的回调阶段</li>
				</ul>
				<img src={require('../../../assets/images/node/EventLoop01.jpg')} alt=''/>
            </div>
			<div>
				<b>关于process.nextTick</b>
				<p>
					process.nextTick 是一个独立于 eventLoop 的任务队列。
					在每一个 eventLoop 阶段完成后会去检查这个队列，
					如果里面有任务，会让这部分任务优先于微任务执行。
				</p>
			</div>
        </div>
        )
    }
}
export default EventLoop;