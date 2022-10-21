export default function Root(props) {
  return (
    <section>
      <div style={{ display: "flex" }}>
        <a
          href="/react1"
          style={{
            color: "#FFF",
            width: "50%",
            border: "1px solid #61dafb",
            textAlign: "center",
            lineHeight: "48px",
            background: "#61dafb",
          }}
        >
          Goto React1 App
        </a>
        <a
          href="/react2"
          style={{
            color: "#FFF",
            width: "50%",
            border: "1px solid #470D82",
            textAlign: "center",
            lineHeight: "48px",
            background: "#470D82",
          }}
        >
          Goto React2 App
        </a>
      </div>
    </section>
  );
}
