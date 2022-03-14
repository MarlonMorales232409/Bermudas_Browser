import { useRouter } from 'next/router'
import React from 'react'
import Header from '../components/Header'
import ResultData from '../components/resultData'

const Results = () => {
    const key = useRouter().query.results

   
    return (
        <div>
          <Header />
            <ResultData url={key}/>
        </div>
      )
}

export default Results;
