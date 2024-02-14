import { Card } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import Feed from './Feed';
import { fillPosts } from './working/postGetLogic';

function Feeds() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    caller();
  }, []);

  async function caller() {
    const res  = await fillPosts(); 
    setPosts(res);
  }

  return (
    <div>
      <Card
        maxW='600px'
        mx='auto'
        my={10}
        boxShadow='xl'
      >
        
        {
          (() => {
            const feedComponents = [];
            for (let i = 0; i < posts.length; i++) {
              feedComponents.push(<Feed post={posts[i]} />);
            }
            return feedComponents;
          })()
        }

      </Card>
    </div>
  );
}

export default Feeds;
