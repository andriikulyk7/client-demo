import Main from "../../components/Messages/Main";
import MainLayout from "../../components/modules/MainLayout";

const PrivateMessages = () => {
  return (
    <MainLayout
      title="Private Messages"
      metaName="messages page"
      metaContent="private messages"
      backLink="/"
      headerText="Private message"
      backgroundColor="#D74695"
      titleColor="#FFFFFF"
    >
      <div>
        <Main />
      </div>
    </MainLayout>
  );
};

export default PrivateMessages;
