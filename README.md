<div align="center">
  <h1 style="color: #2B6CB0; border-bottom: 3px solid #E53E3E; padding-bottom: 10px;">Movie Search App</h1>
  <p>A modern web app for discovering movies, built with React, Tailwind CSS, and AppWrite.</p>
</div>

---

## 🎥 Features  
**Search Movies**  
- Fetch movie details by title using the **OMDB API**.  
- Dynamic search results with real-time updates.  

**Popular Movies**  
- Track popularity metrics using **AppWrite** database.  
- Automatically updates based on user interactions.  

**Featured Movies**  
- Curated list of trending movies powered by **MDB Rapid API**.  
- High-quality metadata and posters.  

---

## 🛠 Technologies  
- **Frontend**: React + Vite, Tailwind CSS  
- **APIs**:  
  - [OMDB API](https://www.omdbapi.com/) for title-based searches.  
  - [Movie Database API](https://rapidapi.com/apidocs/movie-database-imdb-alternative) for featured movies.  
- **Backend**: AppWrite (Database, Project ID, Collection Management).  

---

## ⚙️ Installation  
1. **Clone the repository**  
   ```bash
   git clone https://github.com/hAZratM/movie_app.git
   cd movie_app
   ```

2. **Install dependencies**  
   ```bash
   npm install
   ```

3. **Configure environment variables**  
   Create a `.env` file in the root directory:  
   ```env
   VITE_MDB_API_KEY=your_mdb_rapid_api_key_here
   VITE_OMDB_API_KEY=your_omdb_api_key_here
   VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id
   VITE_APPWRITE_DATABASE_ID=your_appwrite_database_id
   VITE_APPWRITE_COLLECTION_ID=your_appwrite_collection_id
   ```

4. **Start the development server**  
   ```bash
   npm run dev
   ```

---

## 🔍 AppWrite Setup  
1. Create an AppWrite project and database.  
2. Set up a collection for tracking popular movies.  
3. Update the `.env` file with your AppWrite credentials:  
   - `VITE_APPWRITE_PROJECT_ID`  
   - `VITE_APPWRITE_DATABASE_ID`  
   - `VITE_APPWRITE_COLLECTION_ID`  

---

## 📸 Preview  
![Search Interface](/path/to/screenshot.png)  

---

<div align="center" style="margin-top: 20px;">
  <p style="color: #4A5568;">Built with ❤️ by HAZRAT</p>
</div>
