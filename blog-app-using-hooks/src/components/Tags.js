import React, {useState, useEffect} from 'react';
import { Tags_URL } from '../utilities/constants';
import Loader from './Loader';

function Tags (props) {
  // constructor(props) {
  //   super();
  //   this.state = {
  //     allTags: null,
  //     error: '',
  //   };
  // }

  // componentDidMount() {

  // }
  const [allTags, setAllTags] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(Tags_URL)
    .then((res) => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json();
    })
    .then(({ tags }) => {
      setAllTags( tags);
    })
    .catch((err) => {
      setError( 'Not able to fetch Tags');
    });
  });

    // let { error, allTags } = this.state;

    if (error) {
      return <h2 className="text-red-500 text-center text-xl mt-8">{error}</h2>;
    }
    if (!allTags) {
      return <Loader />;
    }
    return (
      <aside className="flex flex-col items-center bg-gray-200 px-4 py-8 rounded-md shadow-lg">
        <h2 className="text-2xl mb-5 font-bold text-gray-600">Tag Cloud</h2>
        <div className="flex flex-wrap">
        {allTags.map((tag) => {
            if (tag !== "") {
            return (
              <span
                key={tag}
                className="bg-gray-500 p-2 cursor-pointer text-white text-xs rounded-md mx-1 my-1"
                onClick={(e) => props.selectTag(e)}
                data-value={tag}
              >
                {tag}
              </span>
            );
            } else {
              return null;
            }
        })}
        </div>
      </aside>
    );
  };

export default Tags;
