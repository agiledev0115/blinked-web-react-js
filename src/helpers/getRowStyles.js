export const getOrderStyle = (itemStatus) => {
    switch (itemStatus) {
        case "Delivered": return { background: "#D4F2FF", color: "#1752FF" }
        case "New": return { background: "#FFEBEC", color: "#FF4554" }
        case "Enroute Dropoff": case "Enroute Pickup": return { background: "#E9EEFF", color: "#1752FF" }
        case "Cancelled": return { background: "#F0EFEF", color: "#5A5D82" }
        case "Assigned": return { background: "#FCF2E3", color: "#F1872D" }
        default: return { background: "#E7FFEC", color: "#288F40" }
    }
};

export const getAgentStyle = (itemStatus) => {
    switch (itemStatus) {
        case "available": return { background: "#EDFAF0", color: "#288F40" }
        default: return { background: "#EBEBFF", color: "#3842B0" }
    }
};