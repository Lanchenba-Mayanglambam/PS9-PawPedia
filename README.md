# PawPedia - Dog Breed Explorer

- PS Number : PS-9
- Project Name : PawPedia
- Live Link : https://ps-9-paw-pedia.vercel.app/

---

## About the Project

PawPedia is a dog breed explorer web application built using React and Vite for Problem Statement 9 (PS-9). The app uses React Router for client-side routing across multiple views. Users can view random dog pictures, browse through a directory of dog breeds with a live search filter, and check details like sub-breeds and photo galleries for specific breeds.

---

## API Used

This project fetches data from the public **Dog CEO API** (`https://dog.ceo/dog-api/`):

1. **Random Dog Image:**  
   `GET https://dog.ceo/api/breeds/image/random`  
   Used on the Home page to display and refresh random dog pictures.

2. **All Breeds List:**  
   `GET https://dog.ceo/api/breeds/list/all`  
   Used on the Breeds page to list every available dog breed.

3. **Sub-breeds List:**  
   `GET https://dog.ceo/api/breed/{breed}/list`  
   Used on the Breed Details page to list sub-breeds (if any).

4. **Breed Photos & Load More:**  
   `GET https://dog.ceo/api/breed/{breed}/images/random/6`  
   Used on the Breed Details page to fetch batches of photos with a load more button.

---

## Routes

| Route | Page Component | Description |
|---|---|---|
| `/` | `Home.jsx` | Landing page showing a welcome message, a random dog photo generator button, and quick navigation. |
| `/breeds` | `Breeds.jsx` | Breeds directory page displaying dog breeds in a responsive card grid with live text filtering. |
| `/breeds/:breed` | `BreedDetails.jsx` | Dynamic page that reads `:breed` from the URL to display sub-breeds and a photo gallery. |
| `*` | `NotFound.jsx` | 404 fallback page for any unmatched URLs with a button to return Home. |

---

## Screenshots

### 1. Home Page & Random Dog Generator
<img width="1470" height="956" alt="Screenshot 2026-10-18 at 1 35 53 AM" src="https://github.com/user-attachments/assets/59cc6833-810c-4728-bbfb-11faca6b531c" />




### 2. Breeds List & Search Filter
<img width="1470" height="956" alt="Screenshot 2026-10-18 at 1 36 14 AM" src="https://github.com/user-attachments/assets/ac05605d-1812-4816-9b43-b2d6974c1613" />




---

## Tech Stack

- **Frontend:** React 19, JavaScript (ES6+)
- **Routing:** React Router v8
- **Build Tool:** Vite
- **Styling:** Custom CSS (clean, responsive card grid layout for mobile and desktop)

---

## Running the Project Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/lanchenba-mayanglambam/PawPedia.git
   cd PawPedia
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open your browser at `http://localhost:5173`.
