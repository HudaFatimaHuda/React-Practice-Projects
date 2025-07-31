import React from 'react'

function BlogItem({params}) {

  return (
    <main>
      <h1>BLog Post</h1>
      <p>This is blog post number {params.id}</p>
    </main>
  )
}

export default BlogItem
