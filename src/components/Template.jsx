
import React, { useState } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import Header from './Header';
import CodeView from './CodeView';

const Template = () => {
  
  const postRequest = `
    header(
      headerName : "Authorization"
      headerValue: "Bearer " + ProjectApiKey
    )
    form-data(
      api: http://localhost:8080/api-file/server/upload/image/{image}
      api: http://localhost:8080/api-file/server/upload/video/{video}
      value: "multipart file"
    )
  `;
  const postResponse= `
    String: "URL"
  `;
  const getRequest = `
    header(
      headerName : "Authorization"
      headerValue: "Bearer " + ProjectApiKey
    )
    request(
      String: "url"
    )
    or only URL
  `;
  const getResponse =`
    Stream: "multipart file"
  `;
  const deleteRequest = `
    header(
      headerName : "Authorization"
      headerValue: "Bearer " + ProjectApiKey
    )
    form-data(
      String: "URL"
    )
  `;
  const deleteResponse=`
    String: "done"
  `;
  const updateRequest = `
    header(
      headerName : "Authorization"
      headerValue: "Bearer " + ProjectApiKey
    )
    form-data(
      String: "URL"
    )
  `;
  const updateResponse= `
    String" URL"
  `;

  
  return (
    
    <div>
      <CodeView title={"POST API Formate:"} req={postRequest} res={postResponse} />
      <CodeView title={"GET API Formate:"} req={getRequest} res={getResponse} />
      <CodeView title={"UPDATE API Formate:"} req={updateRequest} res={updateResponse} />
      <CodeView title={"DELETE API Formate:"} req={deleteRequest} res={deleteResponse} />
    </div>
  )
}

export default Template
