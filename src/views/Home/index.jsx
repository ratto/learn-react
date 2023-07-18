import { useEffect, useState, useCallback } from 'react';
import { loadPosts } from '../../utilities/load-posts';
import { Posts } from '../../components/Posts';
import './styles.css';
import { Button } from '../../components/Button';
import { SearchInput } from '../../components/SearchInput';

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [postsPerPage] = useState(10);
  const [searchValue, setSerchValue] = useState('');

  const noMorePosts = page + postsPerPage >= allPosts.length;

  const filteredPosts = !!searchValue ? allPosts.filter(post => post.title.toLowerCase().includes(searchValue.toLowerCase())) : posts;

  const handleLoadPosts = useCallback(async (page, postsPerPage) => {
    const postsAndPhotos = await loadPosts();
    
    setPosts(postsAndPhotos.slice(page, postsPerPage));
    setAllPosts(postsAndPhotos);
  }, []);
  
  useEffect(() => {
    handleLoadPosts(0, postsPerPage);
  }, [handleLoadPosts, postsPerPage]);

  const loadMorePosts = () => {
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);

    setPosts(posts);
    setPage(nextPage);
  }

  const handleChange = (e) => {
    const { value } = e.target;
    setSerchValue(value);
  }

  return (
    <section className="container">
      {!!searchValue && (
          <h1>Search value: { searchValue }</h1>
      )}
      
      <SearchInput searchValue={searchValue} handleChange={handleChange} />
      <hr /><br />

      {filteredPosts.length > 0 && (
        <Posts posts={filteredPosts} />
      )}

      {filteredPosts.length === 0 && 'Não existem posts para exibir. =('}

      <div className="button-container">
        {!searchValue && (
          <Button 
            text="Load more posts..."
            onClick={loadMorePosts}
            disabled={noMorePosts}
          />
        )}
      </div>
    </section>
  );
}

/* export class Home2 extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 10,
    searchValue: ''
  }

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const { page, postsPerPage } = this.state;
    const postsAndPhotos = await loadPosts();
    this.setState({ 
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos
    });
  }

  loadMorePosts = () => {
    const {
      page,
      postsPerPage,
      allPosts,
      posts
    } = this.state;
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);

    this.setState({ posts, page: nextPage });
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ searchValue: value });
  }

  render() {
    const { posts, page, postsPerPage, allPosts, searchValue } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;

    const filteredPosts = !!searchValue ? allPosts.filter(post => post.title.toLowerCase().includes(searchValue.toLowerCase())) : posts;

    return (
      <section className="container">
        {!!searchValue && (
          <>
            <h1>Text value: { searchValue }</h1>
          </>
        )}
        
        <SearchInput searchValue={searchValue} handleChange={this.handleChange} />
        <hr /><br />

        {filteredPosts.length > 0 && (
          <Posts posts={filteredPosts} />
        )}

        {filteredPosts.length === 0 && 'Não existem posts para exibir. =('}

        <div className="button-container">
          {!searchValue && (
            <Button 
              text="Load more posts..."
              onClick={this.loadMorePosts}
              disabled={noMorePosts}
            />
          )}
        </div>
      </section>
    );
  }
} */
