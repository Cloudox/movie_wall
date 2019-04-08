import os, sys


# 检查文件名如果空格结尾，则去除
def check_last_blank(init_dir):
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

# 检查有哪些电影文件夹内是无信息的
def check_no_info(init_dir):
    for file in os.listdir(init_dir): 
        file_path = os.path.join(init_dir, file)
        if os.path.isdir(file_path):
            for sub_file in os.listdir(file_path): 
                if (sub_file[0] != '['):
                    print(sub_file)

# check_last_blank("E:\\Github\\movie_wall\\static\\movies\\Toshiba")
check_no_info("E:\\Github\\movie_wall\\static\\movies\\Adata")

# python E:\Github\movie_wall\tools\check.py