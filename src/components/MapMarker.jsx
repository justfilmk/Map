import React from "react";

const MapMarker = ({ type, position, label, isActive = false }) => {
  const getMarkerStyle = () => {
    const baseStyle = {
      position: "absolute",
      left: `${position.x}%`,
      top: `${position.y}%`,
      transform: "translate(-50%, -50%)",
      width: "60px",
      height: "60px",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      transition: "all 0.3s ease",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
      border: "3px solid rgba(255, 255, 255, 0.9)",
    };

    const typeStyles = {
      restaurant: {
        backgroundColor: "#FF8A65",
        color: "white",
      },
      hotel: {
        backgroundColor: "#26A69A",
        color: "white",
      },
      hospital: {
        backgroundColor: "#EF5350",
        color: "white",
      },
      education: {
        backgroundColor: "#78909C",
        color: "white",
      },
      shopping: {
        backgroundColor: "#78909C",
        color: "white",
      },
      airport: {
        backgroundColor: "#78909C",
        color: "white",
      },
      default: {
        backgroundColor: "#78909C",
        color: "white",
      },
    };

    return {
      ...baseStyle,
      ...(typeStyles[type] || typeStyles.default),
      transform: isActive
        ? "translate(-50%, -50%) scale(1.1)"
        : "translate(-50%, -50%)",
    };
  };

  const getIcon = () => {
    const iconStyle = {
      fontSize: "24px",
      fontWeight: "bold",
    };

    const icons = {
      restaurant: "🍽️",
      hotel: "🏨",
      hospital: "🏥",
      education: "🎓",
      shopping: "🛍️",
      airport: "✈️",
      default: "📍",
    };

    return <span style={iconStyle}>{icons[type] || icons.default}</span>;
  };

  return (
    <div style={getMarkerStyle()} title={label}>
      {getIcon()}
      {label && (
        <div
          style={{
            position: "absolute",
            top: "70px",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            color: "white",
            padding: "4px 8px",
            borderRadius: "4px",
            fontSize: "12px",
            whiteSpace: "nowrap",
            opacity: isActive ? 1 : 0,
            transition: "opacity 0.3s ease",
            direction: "rtl",
            fontFamily: "Arial, sans-serif",
          }}
        >
          {label}
        </div>
      )}
    </div>
  );
};

export default MapMarker;
