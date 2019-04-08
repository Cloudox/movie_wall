# -- coding: utf-8 --
import os
import shutil
import sys

# total = 1636 # 要复制的文件总数，视情况改
# i = 0
# interval = 5 # 打算每隔5%变化一次，视需求改
# interval_num = int(total / (100 / interval)) 

def mkdir(path):
	folder = os.path.exists(path)
	if not folder:                   #判断是否存在文件夹如果不存在则创建为文件夹
		os.makedirs(path)            #makedirs 创建文件时如果路径不存在会创建这个路径

# 遍历路径内的文件
main_name = ''
init_dir = 'G:\\SOFTWARE\\飞速土豆\\飞速Tudou\\update\\播放器\\新建文件夹\\' + main_name
target_dir = 'D:\\Software\\Everaver\\Toshiba\\'+main_name+'\\' # 需要先创建该目录
# 处理找到信息的视频
for root , dirs, files in os.walk(init_dir):
    for dir_name in dirs:
        print(dir_name)
        new_dir = target_dir + dir_name
        mkdir(new_dir)
        for root , dirs, files in os.walk(init_dir + '\\' + dir_name):
            for name in files:
                if name.endswith(".png") | name.endswith(".jpg") | name.endswith(".nfo"):
                    source = os.path.join(root, name)
                    target = os.path.join(new_dir, name)
                    try:
                        shutil.copy(source, target)
                    except:
                        print("Copy %s failed!" % name)

# 处理未找到的视频
for file in os.listdir(init_dir): 
    file_path = os.path.join(init_dir, file)
    if os.path.isdir(file_path):
        continue
    else:
        print(file)
        new_dir = target_dir+"【缺信息】" + file
        mkdir(new_dir)

    # for name in files:
    #     if name.endswith(".png"): # 只复制特定类型文件
    #         # print (os.path.join(root, name))
    #         source = os.path.join(root, name)
    #         target = os.path.join('E:\\targetdir\\', name)
    #         try:
    #             shutil.copy(source, target)
    #         except:
    #             print("Copy %s failed!" % name)
            
    #         # 每隔5%刷新一次屏幕显示的进度百分比
    #         i += 1
    #         if (i % interval_num == 0):
    #             sys.stdout.write("Copy progress: %d%%   \r" % (i / interval_num * interval))
    #             sys.stdout.flush()


# python E:\Github\movie_wall\tools\copy.py

#【中字】