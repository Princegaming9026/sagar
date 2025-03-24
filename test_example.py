# test_example.py
import pytest
from unittest.mock import MagicMock

# Sample function to be tested
def fetch_data(api_client):
    response = api_client.get_data()
    return response['data']

# Test function
@pytest.mark.parametrize("mock_response, expected", [
    ({"data": "value1"}, "value1"),
    ({"data": "value2"}, "value2"),
])
def test_fetch_data(mock_response, expected):
    # Mocking the API client
    mock_api_client = MagicMock()
    mock_api_client.get_data.return_value = mock_response
    
    # Call the function with the mocked client
    result = fetch_data(mock_api_client)
    
    # Assert the expected result
    assert result == expected
