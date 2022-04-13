"Groceries" App (generic CRUD app)

Registered users of this app can save listed recipes. Unregistered users can browse listed recipes. 

The app uses Firebase for authentication. Registered users can save/manage recipes. Saved recipes are stored as a list in a Mongo DB, associated with their Firebase user ID (no personal information is saved to the Mongo DB, only the Firebase UID).
