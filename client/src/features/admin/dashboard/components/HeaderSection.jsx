const HeaderSection = ({title,subtitle}) => {
  return (
    <div>
      <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
      <p className="text-muted-foreground">{subtitle}</p>
    </div>
  );
};

export default HeaderSection;
