import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./style.css";

const LoginContainer = () => {
  const { register, handleSubmit, formState, setFocus } = useForm();
  const { errors, isDirty, dirtyFields, submitCount, isValid } = formState;
  const [incredibleBigWall, setIncredibleBigWall] = useState(true);
  const [visibleModal, setVisibleModal] = useState(false);
  const navigate = useNavigate();
  //   const password = "Mot de passe";
  const onSubmit = (data) => {
    if (isValid && incredibleBigWall) {
      setVisibleModal(true);
      console.log("Hum .... Toujours pas!");
      console.log("Tu dois te rendre sur la page Movie");
    }
  };

  useEffect(() => {
    const firstError = Object.keys(errors).reduce((field, a) => {
      return !!errors[field] ? field : a;
    }, null);
    if (firstError) {
      setFocus(firstError);
    }
  }, []);

  const Modal = () => {
    return (
      <div
        style={{
          position: "relative",
          alignSelf: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: 50,
          border: "1px solid black",
          borderRadius: 25,
        }}
      >
        <div>Ils reagissent bizarrement ces 2 inputs nan ? </div>
        <div>Un peu de css serait le bienvenue je pense :)</div>
        <div style={{ marginTop: 30 }}>
          Et si tu te sent chaud tu pourrais peut-être régler le problème de
          focus ?!
        </div>
        <button
          style={{ marginTop: 20 }}
          onClick={() => setVisibleModal(false)}
        >
          Avec grand plaisir, j'adore react
        </button>
      </div>
    );
  };

  const LabelizeInput = ({
    placeholder,
    inputStyle,
    name,
    defaultValue,
    register,
    dirtyFields,
    errors,
    required,
    type,
  }) => {
    return (
      <div style={inputStyle.inputContainer}>
        <label
          className="place"
          onClick={() => setFocus(name)}
        >
          {name}
        </label>
        <input
          className="inputLogin"
          // type={!name.password ? "text" : "password"}
          // style={inputStyle}
          type={type}
          placeholder={placeholder}
          defaultValue={defaultValue}
          {...(name, { required: required })}
        />
        {errors?.[name] && (
          <span style={{ fontSize: 14, color: "red" }}>
            Le champ {name} est obligatoire
          </span>
        )}
      </div>
    );
  };

  return (
    <div className="theme">
      {/* <img
        className="ballon"
        src="https://flying-for-you-data.s3.eu-west-3.amazonaws.com/website-images/logo.svg"
        alt=""
      />
      <img
        className="bird"
        src="https://flying-for-you-data.s3.eu-west-3.amazonaws.com/website-images/birdy/street-marketeur.webp"
        alt=""
      /> */}
      <div
        style={{
          display: "flex",
          flex: 1,
          height: "100vh",
          justifyContent: "center",
        }}
      >
        {visibleModal && <Modal />}
        {!visibleModal && (
          <div
            style={{
              position: "relative",
              alignSelf: "center",
              justifyContent: "center",
              textAlign: "center",
              // padding: 50,
              // border: "1px solid black",
              // borderRadius: 25,
            }}
          >
            <div className="padawan">S'identifier</div>
            <form
              // style={{ display: "flex", flexDirection: "column", minWidth: 300 }}
              onSubmit={handleSubmit(onSubmit)}
            >
              <LabelizeInput
                inputStyle={inputStyle}
                placeholder="email"
                type="text"
                defaultValue=""
                register={register}
                dirtyFields={dirtyFields}
                isDirty={isDirty}
                errors={errors}
                required={true}
              />
              <LabelizeInput
                inputStyle={inputStyle}
                type="password"
                placeholder="password"
                defaultValue=""
                register={register}
                dirtyFields={dirtyFields}
                isDirty={isDirty}
                errors={errors}
                required={true}
              />
              <input
                style={{ cursor: "pointer", background:"#546fe4" }}
                className="inputLogin"
                type="submit"
                value="Accéder à la suite"
                onClick={() => navigate("/movies-list")}
              />
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

const inputStyle = {
  inputContainer: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    marginBottom: 30,
    backgroundColor: "transparent",
    zIndex: 2,
  },
  padding: "0 10px",
  height: 30,
};

export default LoginContainer;
