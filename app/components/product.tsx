import { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import axios from "axios"

function Product() {
  // State for form data
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    quantity: ""
  });

  // State for UI feedback
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // Handle input changes
  const handleChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // Validate form data before sending
      if (!formData.name || !formData.price || !formData.quantity) {
        throw new Error("All fields are required");
      }

      // Create axios instance with your backend URL
      const api = axios.create({
        baseURL: "http://127.0.0.1:8000", // REPLACE WITH YOUR ACTUAL API URL
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      });

      // Send POST request to Laravel backend
      const response = await api.post("/api/store", {
        name: formData.name,
        price: parseInt(formData.price), // Convert to integer as expected by your backend
        quantity: parseInt(formData.quantity) // Convert to integer
      });

      // Handle success response
      if (response.status === 200 || response.status === 201) {
        setSuccess(true);
        Alert.alert("Success", "Product created successfully!");
        // Reset form after successful submission
        setFormData({
          name: "",
          price: "",
          quantity: ""
        });
      }
    } catch (err) {
      // Handle Laravel validation errors (status code 422)
      if (err.response && err.response.status === 422) {
        const errors = err.response.data.errors;
        let errorMessage = "";
        for (const key in errors) {
          errorMessage += `${errors[key].join(", ")}\n`;
        }
        setError(errorMessage.trim());
      } else {
        // Handle other errors
        setError(err.message || "Failed to create product");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Create New Product</Text>
      
      {/* Error message display */}
      {error && (
        <Text style={{ color: "red", marginBottom: 10 }}>{error}</Text>
      )}
      
      {/* Success message display */}
      {success && (
        <Text style={{ color: "green", marginBottom: 10 }}>
          Product created successfully!
        </Text>
      )}

      {/* Product Name Input */}
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1, marginBottom: 10, padding: 8 }}
        placeholder="Product Name"
        value={formData.name}
        onChangeText={(text) => handleChange("name", text)}
      />

      {/* Price Input */}
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1, marginBottom: 10, padding: 8 }}
        placeholder="Price"
        value={formData.price}
        onChangeText={(text) => handleChange("price", text)}
        keyboardType="numeric"
      />

      {/* Quantity Input */}
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1, marginBottom: 10, padding: 8 }}
        placeholder="Quantity"
        value={formData.quantity}
        onChangeText={(text) => handleChange("quantity", text)}
        keyboardType="numeric"
      />

      {/* Submit Button */}
      <Button
        title={loading ? "Processing..." : "Create Product"}
        onPress={handleSubmit}
        disabled={loading}
      />

      {success && (
      <Text style={{ color: "green", marginBottom: 10 }}>
        Product created successfully!
      </Text>
    )}
    </View>
  );
}

export default Product;