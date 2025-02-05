import { useState } from "react";
import { Download, Search } from "lucide-react";

const AdminInventoryData = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  const inventoryItems = [
    { id: 1524, name: "Headphones", category: "Electronics", supplier: "Boat India", buyingPrice: 1200, sellingPrice: 1500, quantity: 150 },
    { id: 1525, name: "Smartphone", category: "Electronics", supplier: "Samsung", buyingPrice: 20000, sellingPrice: 25000, quantity: 50 },
    { id: 1526, name: "Laptop", category: "Computers", supplier: "Dell", buyingPrice: 50000, sellingPrice: 60000, quantity: 30 },
    { id: 1527, name: "Mouse", category: "Accessories", supplier: "Logitech", buyingPrice: 800, sellingPrice: 1200, quantity: 200 },
    { id: 1528, name: "Keyboard", category: "Accessories", supplier: "HP", buyingPrice: 1500, sellingPrice: 2000, quantity: 100 },
    { id: 1529, name: "Monitor", category: "Computers", supplier: "LG", buyingPrice: 10000, sellingPrice: 12000, quantity: 40 },
    { id: 1530, name: "Power Bank", category: "Electronics", supplier: "Mi", buyingPrice: 1200, sellingPrice: 1800, quantity: 80 },
    { id: 1531, name: "Tablet", category: "Electronics", supplier: "Apple", buyingPrice: 40000, sellingPrice: 45000, quantity: 25 },
    { id: 1532, name: "Smartwatch", category: "Wearables", supplier: "Amazfit", buyingPrice: 5000, sellingPrice: 7000, quantity: 70 },
    { id: 1533, name: "Speakers", category: "Audio", supplier: "JBL", buyingPrice: 3000, sellingPrice: 4500, quantity: 90 },
  ];

  const sortedItems = [...inventoryItems].sort((a, b) => {
    if (!sortBy) return 0;
    return sortOrder === "asc"
      ? a[sortBy] > b[sortBy]
        ? 1
        : -1
      : a[sortBy] < b[sortBy]
      ? 1
      : -1;
  });

  const filteredItems = sortedItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleSort = (key) => {
    setSortBy(key);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-semibold mb-4">Inventory Data</h1>
      
      {/* Filters and Controls */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
        <div className="relative w-full md:w-1/3">
          <Search className="absolute left-3 top-2.5 text-gray-500" size={20} />
          <input
            type="text"
            placeholder="Search product..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 p-2 border rounded-md"
          />
        </div>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md">
          <Download size={20} /> Download CSV
        </button>
      </div>
      
      {/* Inventory Table */}
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-200">
              {["id", "name", "category", "supplier", "buyingPrice", "sellingPrice", "quantity"].map(key => (
                <th
                  key={key}
                  className="border p-3 cursor-pointer"
                  onClick={() => toggleSort(key)}
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                  {sortBy === key ? (sortOrder === "asc" ? " ▲" : " ▼") : ""}
                </th>
              ))}
              <th className="border p-3">Net Profit</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map((item) => (
              <tr key={item.id} className="border p-3">
                <td className="border p-3">{item.id}</td>
                <td className="border p-3">{item.name}</td>
                <td className="border p-3">{item.category}</td>
                <td className="border p-3">{item.supplier}</td>
                <td className="border p-3">₹{item.buyingPrice}</td>
                <td className="border p-3">₹{item.sellingPrice}</td>
                <td className="border p-3">₹{item.quantity}</td>
                <td className="border p-3">{item.sellingPrice - item.buyingPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminInventoryData;
