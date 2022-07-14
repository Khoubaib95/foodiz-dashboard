function PageTitle({ title }: { title: string }) {
  return (
    <span className="flex items-center h-8 bg-indigo-100 text-indigo-600 text-lg font-semibold px-2 rounded dark:bg-indigo-200 dark:text-indigo-900">
      {title}
    </span>
  );
}
export default PageTitle;
