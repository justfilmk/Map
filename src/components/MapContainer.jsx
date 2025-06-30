import React, { useState } from "react";
import MapMarker from "./MapMarker";

const MapContainer = () => {
  const [activeView, setActiveView] = useState("all");
  const [hoveredMarker, setHoveredMarker] = useState(null);

  const markers = [
    // Restaurant markers (orange)
    {
      id: 1,
      type: "restaurant",
      position: { x: 15, y: 20 },
      label: "مطعم الملك",
    },
    {
      id: 2,
      type: "restaurant",
      position: { x: 45, y: 35 },
      label: "مطعم البحر",
    },
    {
      id: 3,
      type: "restaurant",
      position: { x: 75, y: 25 },
      label: "مطعم الشام",
    },
    {
      id: 4,
      type: "restaurant",
      position: { x: 25, y: 60 },
      label: "مطعم النخيل",
    },
    {
      id: 5,
      type: "restaurant",
      position: { x: 65, y: 70 },
      label: "مطعم الأصالة",
    },
    {
      id: 6,
      type: "restaurant",
      position: { x: 85, y: 80 },
      label: "مطعم التراث",
    },
    {
      id: 7,
      type: "restaurant",
      position: { x: 55, y: 85 },
      label: "مطعم الخليج",
    },

    // Hotel markers (green)
    { id: 8, type: "hotel", position: { x: 20, y: 30 }, label: "فندق الرياض" },
    { id: 9, type: "hotel", position: { x: 80, y: 40 }, label: "فندق الملك" },
    { id: 10, type: "hotel", position: { x: 35, y: 75 }, label: "فندق النخيل" },
    { id: 11, type: "hotel", position: { x: 70, y: 15 }, label: "فندق الفصول" },

    // Hospital markers (red)
    {
      id: 12,
      type: "hospital",
      position: { x: 90, y: 10 },
      label: "مستشفى الملك فهد",
    },
    {
      id: 13,
      type: "hospital",
      position: { x: 85, y: 55 },
      label: "مستشفى التخصصي",
    },
    {
      id: 14,
      type: "hospital",
      position: { x: 40, y: 50 },
      label: "مستشفى الأطفال",
    },
    {
      id: 15,
      type: "hospital",
      position: { x: 60, y: 30 },
      label: "مستشفى العيون",
    },
    {
      id: 16,
      type: "hospital",
      position: { x: 30, y: 85 },
      label: "مستشفى القلب",
    },
    {
      id: 17,
      type: "hospital",
      position: { x: 50, y: 65 },
      label: "المستشفى العام",
    },

    // Education markers (gray)
    {
      id: 18,
      type: "education",
      position: { x: 60, y: 45 },
      label: "جامعة الملك سعود",
    },
    {
      id: 19,
      type: "education",
      position: { x: 75, y: 60 },
      label: "جامعة الأميرة نورة بنت عبدالرحمن",
    },
    {
      id: 20,
      type: "education",
      position: { x: 45, y: 20 },
      label: "جامعة الإمام محمد بن سعود الإسلامية",
    },
    {
      id: 21,
      type: "education",
      position: { x: 15, y: 75 },
      label: "الجامعة السعودية الإلكترونية",
    },

    // Shopping markers (gray)
    {
      id: 22,
      type: "shopping",
      position: { x: 35, y: 40 },
      label: "مول السعودية",
    },
    {
      id: 23,
      type: "shopping",
      position: { x: 65, y: 55 },
      label: "واجهة الرياض",
    },

    // Airport marker (gray)
    {
      id: 24,
      type: "airport",
      position: { x: 85, y: 30 },
      label: "مطار الملك خالد الدولي",
    },

    // Additional misc markers
    {
      id: 25,
      type: "education",
      position: { x: 10, y: 45 },
      label: "مركز الملك عبدالله المالي",
    },
    {
      id: 26,
      type: "shopping",
      position: { x: 25, y: 15 },
      label: "مستشفى المملكة",
    },
    {
      id: 27,
      type: "airport",
      position: { x: 50, y: 10 },
      label: "د.سليمان الحبيب",
    },
  ];

  const getVisibleMarkers = () => {
    if (activeView === "all") return markers;
    return markers.filter((marker) => marker.type === activeView);
  };

  const viewButtons = [
    { id: "all", label: "الكل", color: "#666" },
    { id: "restaurant", label: "المطاعم", color: "#FF8A65" },
    { id: "hotel", label: "الفنادق", color: "#26A69A" },
    { id: "hospital", label: "المستشفيات", color: "#EF5350" },
    { id: "education", label: "التعليم", color: "#78909C" },
  ];

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        position: "relative",
        backgroundColor: "#f5f5f5",
        overflow: "hidden",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* View Toggle Buttons */}
      <div
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          zIndex: 1000,
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          backgroundColor: "white",
          padding: "15px",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
          direction: "rtl",
        }}
      >
        <h3
          style={{
            margin: "0 0 10px 0",
            fontSize: "16px",
            color: "#333",
            textAlign: "center",
          }}
        >
          عرض الخريطة
        </h3>
        {viewButtons.map((button) => (
          <button
            key={button.id}
            onClick={() => setActiveView(button.id)}
            style={{
              padding: "10px 15px",
              border: "none",
              borderRadius: "6px",
              backgroundColor:
                activeView === button.id ? button.color : "#f0f0f0",
              color: activeView === button.id ? "white" : "#333",
              cursor: "pointer",
              fontSize: "14px",
              transition: "all 0.3s ease",
              minWidth: "120px",
            }}
            onMouseOver={(e) => {
              if (activeView !== button.id) {
                e.target.style.backgroundColor = "#e0e0e0";
              }
            }}
            onMouseOut={(e) => {
              if (activeView !== button.id) {
                e.target.style.backgroundColor = "#f0f0f0";
              }
            }}
          >
            {button.label}
          </button>
        ))}
      </div>

      {/* Map Background */}
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundImage:
            "linear-gradient(45deg, #f0f0f0 25%, transparent 25%), linear-gradient(-45deg, #f0f0f0 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #f0f0f0 75%), linear-gradient(-45deg, transparent 75%, #f0f0f0 75%)",
          backgroundSize: "30px 30px",
          backgroundPosition: "0 0, 0 15px, 15px -15px, -15px 0px",
          position: "relative",
        }}
      >
        {/* Map Markers */}
        {getVisibleMarkers().map((marker) => (
          <div
            key={marker.id}
            onMouseEnter={() => setHoveredMarker(marker.id)}
            onMouseLeave={() => setHoveredMarker(null)}
          >
            <MapMarker
              type={marker.type}
              position={marker.position}
              label={marker.label}
              isActive={hoveredMarker === marker.id}
            />
          </div>
        ))}
      </div>

      {/* Legend */}
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          left: "20px",
          backgroundColor: "white",
          padding: "15px",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
          direction: "rtl",
        }}
      >
        <h4 style={{ margin: "0 0 10px 0", fontSize: "14px", color: "#333" }}>
          المفاتيح
        </h4>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div
              style={{
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                backgroundColor: "#FF8A65",
              }}
            ></div>
            <span style={{ fontSize: "12px", color: "#666" }}>مطاعم</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div
              style={{
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                backgroundColor: "#26A69A",
              }}
            ></div>
            <span style={{ fontSize: "12px", color: "#666" }}>فنادق</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div
              style={{
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                backgroundColor: "#EF5350",
              }}
            ></div>
            <span style={{ fontSize: "12px", color: "#666" }}>مستشفيات</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div
              style={{
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                backgroundColor: "#78909C",
              }}
            ></div>
            <span style={{ fontSize: "12px", color: "#666" }}>أخرى</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapContainer;
