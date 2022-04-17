import './App.css';
import PostContainer from './components/PostContainer';

function App() {
    // const dispatch = useAppDispatch();
    // const {users,isLoading,error} = useAppSelector(state => state.userReducer)

    // useEffect(()=>{
    //     dispatch(fetchUsers())
    // },[])

  return (
    <div className="App">
        <PostContainer/>
    </div>
  );
}

export default App;
