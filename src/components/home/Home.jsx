import { useNavigate } from "react-router-dom";


export default function Home() {
  const navigate = useNavigate();
  
function ToDoPy() {
  navigate("/dashboard", { replace: true });
}

  return (
    <div className="const">
      <h2>Welcome ToDoPy</h2>
      <p>A to-do app is a simple, user-friendly digital tool designed to help individuals and teams organize tasks and manage their daily activities efficiently. Users can create, edit, and prioritize tasks, set deadlines or reminders, categorize items, and track their progress, all within an intuitive and accessible interface. These apps are essential for improving productivity, reducing stress, and ensuring that important responsibilities are not forgotten.</p>

      <button
        onClick={ToDoPy}
        className="todo-btn">Go To Tasks</button>
    </div>
  );
}
