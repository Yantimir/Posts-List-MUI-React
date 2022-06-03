import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Box, Button, Typography, TextField } from "@mui/material";
import { AppContext } from "../../context/appContext";

export const AuthForm = ({ titleForm, titleButton, handleCloseModal }) => {

    const { handleSignInUser } = useContext(AppContext);
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onBlur"
    });

    function handleAuthFormSubmit(data) {
        console.log(data)
        // handleSignInUser(data);
        // handleCloseModal();
    }

    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit(handleAuthFormSubmit)}
            sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "300px" }}
        >
            <Typography variant="h6" color="text.secondary">{titleForm}</Typography>
            <TextField
                {...register("email")}
                label="Введите ваш email"
                variant="outlined"
                sx={{ m: 1, width: "100%" }}
                size="small"
            />
            <TextField
                {...register(
                    "password", {
                    pattern: {
                        value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                        message: "Пароль должен содержать минимум 8 символов, буквы латинского алфавита и цифры"
                    }
                })}
                label="Введите password"
                variant="outlined"
                sx={{ m: 1, width: "100%" }}
                size="small"
            />
            <Box component="div">
                {errors?.password && <Typography color="red" sx={{ textAlign: "center", fontSize: "10px" }}>{errors?.password?.message}</Typography>}
            </Box>
            <Button
                variant="contained"
                type="submit"
                sx={{ m: 1, width: "100%" }}
            >{titleButton}
            </Button>
        </Box>
    );
}