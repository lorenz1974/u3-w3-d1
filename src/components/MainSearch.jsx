import { useState, useEffect } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import Job from './Job'
import { useSelector, useDispatch } from 'react-redux'

const MainSearch = () => {
  const searchQueries = useSelector((state) => state.searchQueries)
  const [query, setQuery] = useState(searchQueries || '')
  const [jobs, setJobs] = useState([])
  const dispatch = useDispatch()

  const baseEndpoint = 'https://strive-benchmark.herokuapp.com/api/jobs?search='

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Dispatch dell'azione Redux
    dispatch({ type: 'SEARCH', payload: query })

    try {
      const response = await fetch(baseEndpoint + query + '&limit=20')
      if (response.ok) {
        const { data } = await response.json()
        setJobs(data)
      } else {
        alert('Error fetching results')
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (searchQueries) {
      setQuery(searchQueries)
      handleSubmit(new Event('submit'))
    }
  }, [searchQueries])

  return (
    <Container>
      <Row>
        <Col xs={10} className='mx-auto my-3'>
          <h1 className='display-1'>Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className='mx-auto'>
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type='search'
              value={query}
              onChange={handleChange}
              placeholder='type and press Enter'
            />
          </Form>
        </Col>
        <Col xs={10} className='mx-auto mb-5'>
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default MainSearch
