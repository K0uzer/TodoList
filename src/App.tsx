import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import ContentContainer from './components/todo/ContentContainer'
import TodoList from './components/todo/TodoList'
import EmptyList from './UI/EmptyList'

import './App.css'

function App() {
    return (
        <>
            <Header />
            <ContentContainer>
                {!todos.lingth ? <EmptyList /> : <TodoList />}
            </ContentContainer>
            <Footer />
        </>
    )
}

export default App
