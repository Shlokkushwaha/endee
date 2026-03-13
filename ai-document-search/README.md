# AI Semantic Document Search

## Project Overview
AI Semantic Document Search is a simple application that allows users to search documents based on **meaning rather than exact keywords**.  
Instead of traditional keyword matching, the system converts text into **vector embeddings** and retrieves the most semantically relevant documents.

Users can type a query in the frontend interface, and the system returns the document that best matches the intent of the query.

This project demonstrates how **vector databases and embeddings** can be used to build intelligent search systems.

---

## System Design

The system follows a simple architecture:

Frontend → Backend API → Embedding Generation → Vector Search → Result

### Components

**Frontend**
- Built with HTML, CSS, and JavaScript
- Provides a simple UI for users to enter search queries
- Sends requests to the backend API

**Backend**
- Built with Node.js and Express
- Handles document embedding and similarity search
- Communicates with the vector storage

**Embedding Layer**
- Converts documents and queries into vector embeddings

**Vector Store**
- Stores document embeddings
- Performs similarity search to find the most relevant document

---

## How Endee is Used

The Endee repository is used as the **base infrastructure for vector-based operations**.  
It provides components that support efficient vector storage and similarity search.

In this project:
- Documents are converted into embeddings
- Embeddings are stored in a vector store
- User queries are embedded and compared with stored vectors
- The closest matching document is returned

This demonstrates how **Endee can be integrated into AI-powered semantic search applications**.

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd endee
```

### 2. Install Backend Dependencies

Navigate to the backend folder:

```bash
cd ai-document-search/backend
npm install
```

### 3. Run the Backend Server

```bash
node server.js
```

The backend will run on:

```
http://localhost:3000
```

---

### 4. Run the Frontend

Open another terminal:

```bash
cd ai-document-search/frontend
```

Start a live server:

```bash
live-server
```

or open `index.html` with the VS Code Live Server extension.

The frontend will open in your browser.

---

## Example Workflow

1. User enters a search query in the UI  
2. The frontend sends the query to the backend  
3. The backend converts the query into an embedding  
4. The embedding is compared with stored document vectors  
5. The most similar document is returned  

---

## Future Improvements

- Support PDF and DOCX document uploads
- Add multi-document search results
- Improve UI/UX
- Integrate a persistent vector database
- Add authentication and user document collections

---

## Technologies Used

- Node.js
- Express.js
- HTML
- CSS
- JavaScript
- Vector embeddings
- Endee infrastructure

---

## Author

Shlok kushwaha
AI Semantic Document Search Project