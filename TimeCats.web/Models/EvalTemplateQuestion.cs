﻿namespace TimeCats.Models
{
    public class EvalTemplateQuestion
    {
        public int evalTemplateQuestionID { get; set; }
        public int evalTemplateID { get; set; }

        public int evalTemplateQuestionCategoryID { get; set; }
        public int number { get; set; }
        public char questionType { get; set; }
        public string questionText { get; set; }
    }
}