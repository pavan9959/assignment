import { useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card } from "react-bootstrap";

const Skills = () => {
  const [data, setdata] = useState([]);
  const [input, setinput] = useState("");
  const [flag, setflag] = useState(false);
  const [toogle, settoogle] = useState(false);

  const handelChange = (e) => {
    setinput(e.target.value);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    if (input == "") {
      setflag(true);
    } else {
      setdata([...data, input]);
      setinput("");
      setflag(false);
    }
  };

  const handeltoogle = () => {
    settoogle(!toogle);
  };

  return (
    <div style={{ position: "relative", left: "350px" }}>
      <Card
        style={{
          width: "40rem",
          height: "20rem",
          textAlign: "center",
          borderRadius: "10px",
        }}
      >
        <Card.Body>
          <Card.Title
            style={{ position: "relative", left: "-235px", color: "slategray" }}
          >
            Add Skills
          </Card.Title>
          <hr />
          <Card.Text>
            <div
              style={{
                textAlign: "center",
                width: "250px",
                display: "grid",
                gridTemplateColumns: "auto auto auto auto",
                gridRowGap: "5px",
                position: "relative",
                left: "0px",
              }}
            >
              {data.map((ele, i) => {
                return (
                  <p
                    key={i}
                    style={{
                      borderRadius: "20px",
                      background: "green",
                      color: "white",
                      height: "30px",
                      margin: "0px",
                      width: "150px",
                    }}
                  >
                    {ele}
                    <AiOutlineCheck style={{ width: "50px" }} />
                  </p>
                );
              })}
            </div>
            <form
              onSubmit={handelSubmit}
              style={{
                height: "35px",
                width: "579px",
                position: "relative",
                top: "30px",
              }}
            >
              {toogle ? (
                <input
                  type="text"
                  style={{ height: "35px", width: "579px" }}
                  value={input}
                  onChange={handelChange}
                ></input>
              ) : (
                <Button
                  variant="primary"
                  onClick={handeltoogle}
                  style={{ position: "relative", top: "8px", left: "-236px" }}
                >
                  Add Skill +
                </Button>
              )}
              {flag && <p style={{ color: "red" }}>Please enter skills</p>}
            </form>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Skills;
