import os, sys


# 检查文件名如果空格结尾，则去除
def check_blank(init_dir):
    for file in os.listdir(init_dir): 
        file_path = os.path.join(init_dir, file)
        if os.path.isdir(file_path):
            for sub_file in os.listdir(file_path): 
                sub_file_path = os.path.join(file_path, sub_file)
                if os.path.isdir(sub_file_path):
                    for file_name in os.listdir(sub_file_path): 
                        filename, extension = os.path.splitext(file_name)
                        if (filename[-1] == ' '):
                            new_name = filename[:-1]
                            old_path = os.path.join(sub_file_path, file_name)
                            new_path = os.path.join(sub_file_path, new_name+extension)
                            print(old_path)
                            print(new_path)
                            os.rename(old_path, new_path)

check_blank("E:\\Github\\movie_wall\\static\\movies\\Toshiba")

# python E:\Github\movie_wall\tools\check.py