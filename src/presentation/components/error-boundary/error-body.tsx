export const ErrorBoundaryComponent = ({ name }: { name: string }) => {
  return (
    <div className="title-2-bold" style={{ color: "#000" }}>
      Error component: {name}
    </div>
  );
};
