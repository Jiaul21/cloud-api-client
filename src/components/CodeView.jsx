
import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

const CodeView = ({title,req,res}) => {
  return (
    <div>
      <Container className="py-4">
      <Row>
        <Col>
          <h2 className="mb-4">{title}</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          {/* Request Section */}
          <section className="border p-4 rounded mb-4">
              <Card>
                <Card.Header as="h5">Request</Card.Header>
                <Card.Body>
                  <pre>
                    <code>
                      {req}
                    </code>
                  </pre>
                </Card.Body>
              </Card>
          </section>
        </Col>
        <Col>
          {/* Response Section */}
          <section className="border p-4 rounded mb-4">
            <Card>
                <Card.Header as="h5">Response</Card.Header>
                <Card.Body>
                  <pre>
                    <code>
                      {res}
                    </code>
                  </pre>
                </Card.Body>
              </Card>
          </section>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default CodeView
