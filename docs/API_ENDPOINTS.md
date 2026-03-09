# API Endpoints Documentation

## Authentication Endpoints

### 1. User Registration
- **Endpoint:** `POST /api/auth/register`
- **Description:** Registers a new user.
- **Request Body:**
  - `username`: unique username for the user.
  - `password`: user's password.
- **Response:** 201 Created

---

### 2. User Login
- **Endpoint:** `POST /api/auth/login`
- **Description:** Authenticates a user and returns a token.
- **Request Body:**
  - `username`: user's username.
  - `password`: user's password.
- **Response:** 200 OK + token

---

## Observation Workflow Endpoints

### 3. Create Observation
- **Endpoint:** `POST /api/observations`
- **Description:** Creates a new observation.
- **Request Body:**
  - `description`: details about the observation.
  - `date`: date of the observation.
- **Response:** 201 Created

---

### 4. Get All Observations
- **Endpoint:** `GET /api/observations`
- **Description:** Retrieves all observations.
- **Response:** 200 OK + list of observations

---

### 5. Update Observation
- **Endpoint:** `PUT /api/observations/{id}`
- **Description:** Updates an existing observation.
- **Request Body:**
  - `description`: updated details about the observation.
  - `date`: updated date of the observation.
- **Response:** 200 OK

---

### 6. Delete Observation
- **Endpoint:** `DELETE /api/observations/{id}`
- **Description:** Deletes a specific observation.
- **Response:** 204 No Content

---

## Notes
- Ensure that you have valid authentication tokens for the secure endpoints.
- Modify the endpoints based on your API versioning.