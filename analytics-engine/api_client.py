import requests
import pandas as pd

# Configuration
BASE_URL = "http://localhost:5000"  # Ensure your Node.js server is running
LOGIN_URL = f"{BASE_URL}/api/auth/login"

# Credentials (update these with your admin account)
ADMIN_CREDENTIALS = {
    "email": "admin@example.com",
    "password": "your_secure_password"
}

def get_admin_token():
    """Logs in as admin and returns the JWT token."""
    response = requests.post(LOGIN_URL, json=ADMIN_CREDENTIALS)
    if response.status_code == 200:
        return response.json().get("token")  # Adjust key if your API returns something else
    else:
        print(f"❌ Login Failed: {response.text}")
        return None

def fetch_protected_data(endpoint, token):
    """Fetches data from an endpoint using the JWT token."""
    url = f"{BASE_URL}{endpoint}"
    headers = {"Authorization": f"Bearer {token}"}
    
    response = requests.get(url, headers=headers)
    if response.status_code == 200:
        return response.json()
    else:
        print(f"❌ Error fetching {endpoint}: {response.status_code} - {response.text}")
        return None

# --- Main Logic ---
token = get_admin_token()

if token:
    print("✅ Authenticated successfully.")
    
    # Example: Fetching Top Selling Products from recommendationRoutes.js [cite: 3]
    top_products = fetch_protected_data("/api/recommendations/top-selling", token)
    
    # Example: Fetching Revenue Analytics from analyticsRoutes.js [cite: 1]
    revenue_data = fetch_protected_data("/api/analytics/revenue", token)
    
    # Convert to DataFrame if data is found
    if top_products:
        df_top = pd.DataFrame(top_products)
        print("Top products data successfully loaded into DataFrame.")