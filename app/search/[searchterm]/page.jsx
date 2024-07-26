'use client'
import React from 'react'
import SearchResults from '@/components/SearchResults'

const Search = ({params,searchParams}) => {

  return (
    <div className="">
        <SearchResults term={params?.searchterm} type={searchParams?.type} />
      </div>
  )
}

export default Search