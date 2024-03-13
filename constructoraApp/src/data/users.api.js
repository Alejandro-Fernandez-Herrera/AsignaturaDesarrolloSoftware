export const fetchUsers = async () => {
        const res = await fetch("http://localhost:8000/constructora_app/api/v1/usuarios/");
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        return res.json();
};