import React, { useState } from "react";
import { assets } from "../assets/assets";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddItems = () => {
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "Salad",
    price: "",
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!image) {
      toast.error("Please select an image before adding the item!");
      return;
    }

    console.log({
      ...formData,
      image: "Image file selected",
    });

    toast.success("Item Added Successfully!");

    setImage(null);
    setFormData({
      name: "",
      description: "",
      category: "Salad",
      price: "",
    });
  };

  return (
    <div className="flex justify-center p-4">
      <div className="w-full max-w-lg bg-white rounded-lg p-6 shadow-md">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <p className="mb-2 font-medium">Upload Image</p>
            <label htmlFor="image" className="cursor-pointer">
              <img
                src={image || assets.upload_area}
                alt="Upload Preview"
                className="w-24 h-24 object-cover border border-gray-300 rounded-md"
              />
            </label>
            <input
              type="file"
              id="image"
              hidden
              onChange={handleImageChange}
              required
            />
          </div>

          <div>
            <p className="mb-2 font-medium">Product name</p>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Type here"
              className="border border-gray-300 rounded-md p-2 w-full"
              required
            />
          </div>

          <div>
            <p className="mb-2 font-medium">Product description</p>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              placeholder="Write content here"
              className="border border-gray-300 rounded-md p-2 w-full"
              required
            />
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <p className="mb-2 font-medium">Product category</p>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="border border-gray-300 rounded-md p-2 w-full"
              >
                <option value="Salad">Salad</option>
                <option value="Rolls">Rolls</option>
                <option value="Deserts">Deserts</option>
                <option value="Sandwich">Sandwich</option>
                <option value="Cake">Cake</option>
                <option value="Pure Veg">Pure Veg</option>
                <option value="Pasta">Pasta</option>
                <option value="Noodles">Noodles</option>
              </select>
            </div>

            <div className="flex-1">
              <p className="mb-2 font-medium">Product price</p>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="₹200"
                className="border border-gray-300 rounded-md p-2 w-full"
                required
              />
            </div>
          </div>

          <button
            onClick={handleSubmit}
            type="submit"
            className="bg-black text-white p-2 rounded-md hover:cursor-pointer hover:bg-gray-800 transition"
          >
            ADD
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
