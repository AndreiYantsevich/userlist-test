import React, {useEffect} from 'react';
import {useTypedSelector} from '../hooks/useTypedSelector';
import {useActions} from '../hooks/useActions';

const Todolist: React.FC = () => {
    const {error, loading, todos, limit, page} = useTypedSelector(state => state.todo)
    const {fetchTodos, setTodoPage} = useActions()
    const pages = [1, 2, 3, 4, 5]

    useEffect(() => {
        fetchTodos(page, limit)
    }, [page])

    if (loading) {
        return <h1>Идёт загрузка...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }
    return (
        <div>
            {todos.map(t => <div key={t.id}>{t.id} - {t.title}</div>)}
            <div style={{display: 'flex'}}>
                {pages.map(p =>
                    <div
                        onClick={() => setTodoPage(p)}
                        style={{border: p === page ? '2px solid red' : '1px solid gray', padding: '10px'}}>
                        {p}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Todolist;