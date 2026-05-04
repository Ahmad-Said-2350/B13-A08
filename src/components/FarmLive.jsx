const FarmLive = () => {
  const items = [
    { name: "Deshi Shahi Cow", location: "Bogura", price: "$120000" },
    { name: "Sahiwal Premium Cow", location: "Rajshahi", price: "$180000" },
    { name: "Black Bengal Goat", location: "Kushtia", price: "$25000" },
    { name: "Jamunapari Goat", location: "Dhaka", price: "$32000" },
    { name: "Holstein Bull", location: "Chattogram", price: "$2,20,000" },
    { name: "Deshi White Goat", location: "Sylhet", price: "$20,000" },
  ];

  const doubled = [...items, ...items];

  return (
    <div style={{ background: "#f8f6ff", borderTop: "1px solid #e9e4ff", borderBottom: "1px solid #e9e4ff", overflow: "hidden" }}>

      <div style={{ position: "relative", height: 44, overflow: "hidden" }}>
        {[
          { emoji: "🐄", dur: "9s", delay: "0s", size: 28 },
          { emoji: "🐄", dur: "13s", delay: "-5s", size: 20 },
          { emoji: "🐄", dur: "11s", delay: "-3s", size: 18 },
        ].map((a, i) => (
          <span key={i} style={{
            position: "absolute",
            bottom: 6,
            fontSize: a.size,
            animation: `fw ${a.dur} linear ${a.delay} infinite`,
          }}>
            {a.emoji}
          </span>
        ))}
      </div>

      <div style={{ borderTop: "1px solid #e9e4ff", padding: "10px 0", overflow: "hidden" }}>
        <div style={{ display: "flex", animation: "ft 22s linear infinite", width: "max-content" }}>
          {doubled.map((item, i) => (
            <span key={i} style={{
              padding: "0 28px",
              fontSize: 13,
              whiteSpace: "nowrap",
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              color: "#3b3b3b",
            }}>
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#7c3aed", display: "inline-block" }} />
              {item.name}
              <span style={{ color: "#aaa", fontSize: 12 }}>{item.location}</span>
              <span style={{ color: "#7c3aed", fontWeight: 500 }}>{item.price}</span>
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fw { 0%{left:-60px} 100%{left:110%} }
        @keyframes ft { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
      `}</style>
    </div>
  );
};

export default FarmLive;