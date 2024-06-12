import ExternalLinkHandler from "../../components/ExternalLinkHandler";

const ExternalLinkHandlerPage = ({
  searchParams,
}: {
  searchParams: { url: string };
}) => {
  return <ExternalLinkHandler searchParams={searchParams} />;
};

export default ExternalLinkHandlerPage;
