import React from "react";
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";
const COLORS = [
    "#8884d8",
    "#82ca9d",
    "#ffc658",
    "#ff7f50",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
];

const BookPieChart = ({ categoryCount }) => {
    return (
        <div className="w-full max-w-xl mx-auto mt-6 p-4 bg-white border border-gray-100 rounded-xl shadow">
            <p className="text-center text-sm text-gray-700 font-medium mb-4">
                Books per Category (Pie Chart)
            </p>

            {Array.isArray(categoryCount) && categoryCount.length > 0 ? (
                <div className="w-full h-72">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={categoryCount}
                                dataKey="count"
                                nameKey="category"
                                cx="50%"
                                cy="50%"
                                outerRadius="80%"
                                fill="#8884d8"
                                label
                            >
                                {categoryCount.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={COLORS[index % COLORS.length]}
                                    />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend verticalAlign="bottom" height={36} />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            ) : (
                <p className="text-sm italic text-gray-500 text-center">
                    No category data found.
                </p>
            )}
        </div>
    );
};

export default BookPieChart;
