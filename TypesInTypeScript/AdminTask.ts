// Ogólny typ Task
interface Task 
{
    title: string;
    description: string;
    completed: boolean;
  }
  
  // Bardziej szczegółowy typ AdminTask z dodatkowymi właściwościami
  interface AdminTask extends Task 
  {
    assignedTo: string;
    priority: "low" | "medium" | "high";
  }
  
  // Przykład poprawnego przypisania
  const generalTask: Task = {
    title: "Zadanie ogólne",
    description: "Opis zadania",
    completed: false,
  };
  
  const adminTask: AdminTask = {
    title: "Zadanie administracyjne",
    description: "Zarządzanie systemem",
    completed: false,
    assignedTo: "Admin",
    priority: "high",
  };
  
  // Poprawne przypisanie adminTask do zmiennej typu Task (zgodność strukturalna)
  const taskAsGeneral: Task = adminTask;
  
  // Błąd: próba przypisania Task do AdminTask (brakuje assignedTo i priority)
  // const invalidAdminTask: AdminTask = generalTask; // TypeScript zgłosi błąd
  
  console.log(taskAsGeneral);
  