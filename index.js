marked.setOptions({
    breaks: true
})

const renderer = new marked.Renderer();

function App() {

    const [text, setText] = React.useState("");

    const handleChange = (e) => {
        setText(e.target.value)
    }

    return (
        <div style={{backgroundColor: '#111', minHeight: '100vh', color: 'white'}}>
            <div className='text-center px-4'>
                <h1 className='p-4'>My Markdown Previewer</h1>
                <textarea name='text' id='text' rows='10' cols='60' className='textarea' value={text} onChange={handleChange}></textarea>
                <h3 className='mt-3'>Output</h3>
                <Preview markdown={text} />
            </div>
        </div>
    );
}

function Preview({ markdown }) {
    return (
        <div className='markdown-container' style={{border: '2px solid orange', minHeight: '30vh', borderRadius: '0px 20px'}}>
            <div className='mt-2' dangerouslySetInnerHTML={{__html: marked(markdown, {renderer: renderer}) }} id='preview'></div>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'))