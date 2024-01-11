import { FormattedMessage } from 'umi';

const DocsPage = () => {
  return (
    <div>
      <p className=" text-red-600">
        <FormattedMessage id="hi" />
      </p>
      <p>
        <FormattedMessage id="welcome" />
      </p>
      <p>
        <FormattedMessage id="be-happy" />
      </p>
      <p>
        <FormattedMessage id="app.title" />
      </p>
      <p>
        <FormattedMessage id="app.description" />
      </p>
    </div>
  );
};

export default DocsPage;
