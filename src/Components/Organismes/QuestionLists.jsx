import React, { useContext, useState } from 'react';
import { Button } from "../Atoms/Button.jsx";
import QuestionCards from '../Molecules/QuestionCards.jsx';
import { db } from '../../services/dataFile.js';
import { addDoc, collection } from "firebase/firestore";
import Swal from 'sweetalert2';
import Data_Context from '../../Context/dataContext.js';

function QuestionLists() {
    const [arrQestionCards, SetarrQestionCards] = useState([{}]);
    const ajouterQuestion = () => {
        SetarrQestionCards((e) => ([...e, {}]));
    };
    const col = collection(db, "surveys");
    const {
        Qestion = [],
        imageSrc,
        setQuestion,
        titleSurvey,
        setTitleSurvey,
        DescriptionSurvey,
        setDescriptionSurvey,
    } = useContext(Data_Context);

    const validateQuestions = (questions) => {
        if (!Array.isArray(questions)) {
            throw new Error("Questions must be an array");
        }
        return questions.map(question => ({
            text: question?.text || "",
            options: question?.options || []
        }));
    };

    const SendData = async (e) => {
        e.preventDefault();

        let validatedQuestions;
        try {
            validatedQuestions = validateQuestions(Qestion);
        } catch (error) {
            Swal.fire({
                title: "Validation Error",
                text: error.message,
                icon: "error",
            });
            return;
        }

        const obj = {
            image: imageSrc,
            man: 0,
            woman: 0,
            ageRange: {
                "0-15": 0,
                "16-20": 0,
                "21-35": 0,
                "36-50": 0,
                "51-70": 0
            },
            Country: {
                America: 0,
                Africa: 0,
                Asia: 0,
                Australia: 0,
                Europe: 0
            },
            title: titleSurvey,
            description: DescriptionSurvey,
            questions: validatedQuestions
        };

        if (obj.title.length === 0 || obj.description.length === 0) {
            Swal.fire({
                title: "Make sure you fill Everything :( !",
                icon: "error",
            });
            return;
        }

        try {
            await addDoc(col, obj);
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Your Survey saved successfully",
                showConfirmButton: false,
                timer: 1500
            }).then(() => {
                setTitleSurvey("");
                setDescriptionSurvey("");
            });
        } catch (error) {
            Swal.fire({
                title: "Error saving survey",
                text: error.message,
                icon: "error",
            });
        }
    }

    const del = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to see All Questions!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your Question has been deleted.",
                    icon: "success",
                });
                SetarrQestionCards([]);
            }
        });
    }

    const deleteQuestionCard = (index) => {
        SetarrQestionCards(arrQestionCards.filter((_, i) => i !== index));
    };

    return (
        <>
            <div className='mx-0'>
                <Button addnewComponent={ajouterQuestion} paddingY='py-3' paddingX='px-6' bgColor="bg-[#042B29]" marginX="ml-[-35px]">Add New Question</Button>
                <Button addnewComponent={del} paddingY='py-3' paddingX='px-6' bgColor="bg-red-700" marginX="ml-2">Delete All</Button>
            </div>
            <div className='w-[900px] py-5 ml-[-35px]'>
                {arrQestionCards.map((e, i) => (
                    <QuestionCards
                        key={i}
                        i={i}
                        setQuestion={setQuestion}
                        deleteCard={() => deleteQuestionCard(i)}
                    />
                ))}
            </div>
            <div className='ml-[705px]'>
                <Button
                    addnewComponent={SendData}
                    paddingY='py-3' paddingX='px-8' marginX='ml-[48px]' bgColor="bg-[#042B29]"
                >
                    Submit
                </Button>
            </div>
        </>
    );
}

export default QuestionLists;
