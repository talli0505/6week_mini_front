import React from "react";
import Layout from "../components/common/Layout";

const Form = () => {
  return (
    <Layout>
      <div className="bg-red-600">
        <form>
          <input type="text" />
          <input type="textarea" />
          <button>제출하기</button>
        </form>
      </div>
    </Layout>
  );
};

export default Form;
